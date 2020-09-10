import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import useToggle from '../../src/hooks/useToggle'

interface CardItemProps {
  card: number
  onToggleModal: () => void
}

const CardItemStyles = styled(motion.div)`
  flex: 1;
  width: 80%;
  margin: 1em 0;
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  border-radius: ${({ theme }) => theme.borderRadius};
`

interface CardBodyProps {
  card: number
}

function handleCard(cardNumber: number) {
  switch (cardNumber) {
    case 1:
      return '/black.png'
    case 2:
      return '/blue.png'
    case 3:
      return '/green.png'
    case 4:
      return '/purp.png'
    case 5:
      return '/black.png'
    case 6:
      return '/six.png'
    case 7:
      return '/green.png'
    case 8:
      return '/eight.png'
    case 9:
      return '/blue.png'
    case 10:
      return '/purp.png'
    default:
      return '/ten.png'
  }
}

const CardBody = styled.div<CardBodyProps>`
  background-image: url(${({ card }) => card && handleCard(card)});
  background-size: cover;
  background-position: center;
  /* // 16:9 ratio */
  padding-bottom: 62.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    text-shadow: 1px 2px 3px ${({ theme }) => theme.colors.stroke};
    text-transform: capitalize;
    background: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.main};
    padding: 0.5em 1em;
    box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
  }
`

const CardItem: React.FC<CardItemProps> = ({ card, onToggleModal }) => {
  const [on, toggle] = useToggle()
  return (
    <CardItemStyles
      // drag
      // dragConstraints={{
      //   top: -100,
      //   left: -100,
      //   bottom: 100,
      //   right: 100,
      // }}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      // whileHover={{ scale: [1.04, 0.8, 1.2] }}
      // whileTap={{ background: '#078080' }}
      // onHoverEnd={() => console.log('just to test that it works on hoveEnd')}
      initial={{ opacity: 0, x: 200 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 1.5 }}
    >
      <CardBody card={card}>
        <motion.h3
          onClick={onToggleModal}
          whileHover={{ scale: [1.04, 0.8, 1.2] }}
          data-testid={`carditem-id-${card}`}
          animate={{ opacity: on ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          Card number {card} Oh yes click me
        </motion.h3>
      </CardBody>
    </CardItemStyles>
  )
}
export default CardItem
