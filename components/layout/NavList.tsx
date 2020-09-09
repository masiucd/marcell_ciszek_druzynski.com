import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'
import { navLinks } from '../../src/initialData/data'

interface navlistProps {}

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  li {
    padding: 1em;
  }
  a {
    color: ${({ theme }) => theme.colors.tertiary};
    transition: ${({ theme }) => theme.transition.quickTransition};
    border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary};
    font-size: 2em;
    text-transform: capitalize;
    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.highlight};
    }
  }
`

const Navlist: React.FC<navlistProps> = () => {
  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { y: -20, opacity: 0 },
  }
  const [navlinksData, setNavlinksData] = React.useState(() => navLinks)

  return (
    <StyledNavList>
      {navlinksData.map(({ text, path }) => (
        <motion.li
          key={text}
          variants={liVariants}
          initial="closed"
          animate="open"
        >
          <Link href={path}>
            <a>{text}</a>
          </Link>
        </motion.li>
      ))}
    </StyledNavList>
  )
}
export default Navlist
