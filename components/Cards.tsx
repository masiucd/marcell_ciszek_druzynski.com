import { motion } from 'framer-motion'
import React from 'react'
import CardItem from './elements/CardItem'
import styled from 'styled-components'
import SliderInput from './SliderInput'
import useToggle from '../src/hooks/useToggle'
import Modal from './Modal'

interface CardsProps {}

const CardsStyles = styled(motion.section)`
  margin: 3em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Cards: React.FC<CardsProps> = () => {
  const [cards, setCards] = React.useState(Array.from(Array(10).keys()))
  const [range, setRange] = React.useState(0)
  const [showModal, toggleModal] = useToggle()
  console.log(showModal)
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
        <CardItem key={card + 1} card={card + 1} onToggleModal={toggleModal} />
      ))}
      <Modal
        isOn={showModal}
        modalTitle="Hello Modal"
        modalText="some dummy text"
        onToggleModal={toggleModal}
      />
    </CardsStyles>
  )
}
export default Cards
