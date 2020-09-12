import styled from 'styled-components'
import { motion } from 'framer-motion'
import React from 'react'
import { handleBackgroundImage } from '../../src/utils/helpers'

interface BoxProps {
  box: number
  color: string
}

interface BoxStylesProps {
  box: number
}
interface ArticleProps {
  box: number
  color: string
}

const Article = styled(motion.article)<ArticleProps>`
  flex: 1;
  flex-basis: 60%;
  margin: 1em 0;
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 2em;
  background: ${({ color }) => (color ? color : 'transparent')};
  @media (max-width: 960px) {
    margin: 0.5em;
  }
`

const BoxStyles = styled(motion.div)<BoxStylesProps>`
  background-image: url(${({ box }) =>
    box ? handleBackgroundImage(box) : ''});
  background-size: cover;
  background-position: center;
  /* // 16:9 ratio */
  padding-bottom: 62.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Box: React.FC<BoxProps> = ({ box, color }) => {
  return (
    <Article color={color} box={box}>
      <BoxStyles box={box}>
        <h3>{box}</h3>
      </BoxStyles>
    </Article>
  )
}
export default Box
