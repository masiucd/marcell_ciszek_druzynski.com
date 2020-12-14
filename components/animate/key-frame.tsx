import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled(motion.div)`
  width: 50rem;
  border: 2px solid ${(props) => props.theme.colors.headline};
`

const KeyFrame = () => {
  return (
    <Wrapper>
      <motion.div
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
        }}
        animate={{
          x: [0, 25, 50, 75, 100, 125, 150, 175, 200],
        }}
        transition={{
          // times: [0.2, 0.3, 0.3, 0.45, 0.5],
          duration: 1.5,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/monster/SVG/kidaha-02.svg"
          alt="kidha"
          width={50}
          height={50}
        />
      </motion.div>
    </Wrapper>
  )
}
export default KeyFrame
