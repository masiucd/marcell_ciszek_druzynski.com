import styled from 'styled-components'
import { motion } from 'framer-motion'

const BtnPrimary = styled(motion.button)`
  border: 2px solid ${({ theme }) => theme.colors.button};
  padding: 0.3em 0.6em;
  font-size: 1.2em;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  outline: 0;
  color: ${({ theme }) => theme.colors.paragraph};
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.main};
    box-shadow: ${({ theme }) => theme.shadow.elevations[5]};
  }
`

export { BtnPrimary }
