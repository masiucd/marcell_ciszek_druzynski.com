import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion/dist/framer-motion'
import useToggle from '../../src/hooks/useToggle'
import styled from 'styled-components'
import { BtnPrimary } from '../styles/buttons'

const IconWrapper = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.colors.headline};
  padding: 1em;
  margin: 0 auto;
  width: 15em;
  height: 15em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SimpleAnimate = () => {
  const [animateIcon, toggleAnimateIcon] = useToggle(false)

  return (
    <IconWrapper
      animate={{ y: animateIcon ? -200 : 0, rotate: animateIcon ? 45 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src="/monster/SVG/kidaha-01.svg"
        alt="kidha"
        width={50}
        height={50}
      />
      <BtnPrimary whileHover={{ scale: 1.1 }} onClick={toggleAnimateIcon}>
        {animateIcon ? 'back to noraml' : 'Click to animate'}
      </BtnPrimary>
    </IconWrapper>
  )
}
export default SimpleAnimate
