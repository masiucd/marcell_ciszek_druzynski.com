import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import useToggle from '../../src/hooks/useToggle'
import { handleBackgroundImage } from '../../src/utils/helpers'
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

const CardBody = styled.div<CardBodyProps>`
  background-image: url(${({ card }) => card && handleBackgroundImage(card)});
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
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])
  const [isActive, toggleActive] = useToggle()
  return (
    <AnimatePresence>
      {!isActive && (
        <motion.div
          exit={{ height: 0, overflow: 'hidden', opacity: 0 }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <CardItemStyles
            onDragEnd={(event, info) => {
              if (info.point.x > 100 || info.point.x < -100) {
                toggleActive()
              }
            }}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            onMouseEnter={toggle}
            onMouseLeave={toggle}
            initial={{ opacity: 0, x: 200 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1.5 }}
            style={{
              x,
              opacity: isActive ? opacity : 0,
            }}
            exit={{
              height: isActive && 0,
              overflow: isActive ? 'hidden' : 'visible',
            }}
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default CardItem
