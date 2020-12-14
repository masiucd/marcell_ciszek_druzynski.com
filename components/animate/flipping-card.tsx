import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Card = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.colors.paragraph};
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    font-size: 2rem;
    display: grid;
    place-items: center;
  }

  .back {
    color: ${(props) => props.theme.colors.main};
    background: ${(props) => props.theme.colors.secondary};
    transform: rotateX(180deg);
  }

  .front {
    color: ${(props) => props.theme.colors.main};
    background: ${(props) => props.theme.colors.highlight};
  }
`
type Direction = 'X' | 'Y'

interface Props {
  rotateDirection?: Direction
}

export const FlippingCard = ({ rotateDirection = 'X' }: Props) => {
  return (
    <Container>
      <Card
        animate={{ transition: { duration: 0.4 } }}
        whileHover={
          rotateDirection === 'X' ? { rotateX: 180 } : { rotateY: 180 }
        }
      >
        <div className="face front">front</div>
        <div className="face back">back</div>
      </Card>
    </Container>
  )
}
