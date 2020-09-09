import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
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
    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.highlight};
    }
  }
`

const Navlist: React.FC<navlistProps> = () => {
  return (
    <StyledNavList>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </StyledNavList>
  )
}
export default Navlist
