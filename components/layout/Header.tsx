import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import useToggle from '../../src/hooks/useToggle'

interface HeaderProps {
  className?: string
}

const ToggleButton = styled.div`
  font-size: 3em;
  cursor: pointer;
`

const Header: React.FC<HeaderProps> = ({ className = 'header-component' }) => {
  const [isNavOpen, toggleNavOpen] = useToggle()
  return (
    <header className={className}>
      <ToggleButton onClick={toggleNavOpen}>🍔</ToggleButton>
      <Nav isOpen={isNavOpen} toggleNavOpen={toggleNavOpen} />
    </header>
  )
}
export default styled(Header)`
  background: ${({ theme }) => theme.colors.button};
  padding: 2em;
  position: relative;
`
