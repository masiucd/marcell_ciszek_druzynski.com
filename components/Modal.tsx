import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

interface ModalProps {
  modalTitle: string
  modalText: string
  isOn: boolean
  onToggleModal: () => void
}

const StyledModal = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBody = styled.div`
  background: ${({ theme }) => theme.colors.main};
  padding: 2em 4em;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  h3,
  p {
    color: ${({ theme }) => theme.colors.paragraph};
  }
  h3 {
    font-size: 5em;
  }
  p {
    font-size: 2em;
  }
  .close-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`

const Modal: React.FC<ModalProps> = ({
  modalText,
  modalTitle,
  isOn,
  onToggleModal,
}) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-100%' },
  } as const

  return (
    <StyledModal animate={isOn ? 'open' : 'closed'} variants={variants}>
      <ModalBody>
        <span className="close-modal" onClick={onToggleModal}>
          ❌
        </span>
        <h3>{modalTitle}</h3>
        <p>{modalText}</p>
      </ModalBody>
    </StyledModal>
  )
}
export default Modal
