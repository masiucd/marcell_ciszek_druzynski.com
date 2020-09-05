import { motion } from 'framer-motion'
import React from 'react'
import CardItem from './elements/CardItem'
import styled from 'styled-components'

interface CardsProps {}

const CardsStyles = styled(motion.section)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Cards: React.FC<CardsProps> = ({}) => {
  const [cards, setCards] = React.useState(Array.from(Array(10).keys()))

  return (
    <CardsStyles
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 2 }}
    >
      {cards.map((card) => (
        <CardItem key={card + 1} card={card + 1} />
      ))}
    </CardsStyles>
  )
}
export default Cards
