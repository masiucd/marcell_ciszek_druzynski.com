import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import NavList from './NavList'

interface NavProps {
  className?: string
  isOpen: boolean
  toggleNavOpen: () => void
}

const Nav: React.FC<NavProps> = ({
  isOpen,
  toggleNavOpen,
  className = 'main-navigation',
}) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  } as const

  return (
    <motion.nav
      className={className}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ damping: 20 }}
    >
      <div className="close-icon" onClick={toggleNavOpen}>
        <span>❌</span>
      </div>
      <NavList />
    </motion.nav>
  )
}
export default styled(Nav)`
  padding: 40px;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 40vw;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  background: ${({ theme }) => theme.colors.headline};
  display: flex;
  justify-content: center;
  align-items: center;
  .close-icon {
    position: absolute;
    top: 1em;
    right: 1em;
    cursor: pointer;
    font-size: 3em;
  }
`
