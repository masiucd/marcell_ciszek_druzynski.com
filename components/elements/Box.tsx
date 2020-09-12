import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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
  background-size: cover;
  background-position: center;
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Box: React.FC<BoxProps> = ({ box, color }) => {
  return (
    <Article
      color={color}
      box={box}
      initial={{ scale: 0.6 }}
      animate={{ scale: 1.1 }}
      transition={{
        damping: 100,
        stiffness: 1,
        duration: 1.2,
      }}
    >
      <BoxStyles box={box}>
        <h3>{box}</h3>
      </BoxStyles>
    </Article>
  )
}
export default Box
