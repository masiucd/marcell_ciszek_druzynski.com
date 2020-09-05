import { motion } from 'framer-motion'
import React from 'react'
import CardItem from './elements/CardItem'
import styled from 'styled-components'
import SliderInput from './SliderInput'

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
  const [range, setRange] = React.useState(0)

  return (
    <CardsStyles
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: range * 2,
      }}
      transition={{ duration: 2 }}
    >
      <SliderInput onRange={range} onSetRange={setRange} />
      {cards.map((card) => (
        <CardItem key={card + 1} card={card + 1} />
      ))}
    </CardsStyles>
  )
}
export default Cards
