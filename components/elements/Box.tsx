import styled from 'styled-components'
import { motion } from 'framer-motion'
import React from 'react'
import { handleBackgroundImage } from '../../src/utils/helpers'

interface BoxProps {
  box: number
}

interface BoxStylesProps {
  b: number
}
const Article = styled(motion.article)`
  flex: 1;
  width: 100%;
  margin: 1em 0;
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 2em;
  @media (max-width: 960px) {
    margin: 0.5em;
  }
`

const BoxStyles = styled(motion.div)<BoxStylesProps>`
  background-image: url(${({ b }) => (b ? handleBackgroundImage(b) : '')});
  background-size: cover;
  background-position: center;
  /* // 16:9 ratio */
  padding-bottom: 62.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Box: React.FC<BoxProps> = ({ box }) => {
  return (
    <Article>
      <BoxStyles b={box}>
        <h3>{box}</h3>
      </BoxStyles>
    </Article>
  )
}
export default Box
