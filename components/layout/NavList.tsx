import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'
import { navLinks } from '../../src/initialData/data'

const StyledNavList = styled(motion.ul)`
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

const Navlist = () => {
  const ulVariants = {
    open: {
      scale: 1.07,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        staggerDirection: -1, // -1 backwords , 1 forwards
        when: 'afterChildren', // afterChildren , beforeChildren
      },
    },
    closed: {
      scale: 1,
    },
  } as const

  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: { y: -90, opacity: 0 },
  } as const

  const [navlinksData] = React.useState(() => navLinks)

  return (
    <StyledNavList variants={ulVariants}>
      {navlinksData.map(({ text, path }) => (
        <motion.li
          key={text}
          variants={liVariants}
          whileHover={{ scale: [1.06, 1.02, 1.08] }}
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
