import { motion } from 'framer-motion'
import Image from 'next/image'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
const ImageWrapper = styled(motion.div)``

const Loader = () => {
  return (
    <Wrapper>
      <ImageWrapper
        initial={{ scale: 1, opacity: 0.25 }}
        animate={{ scale: 1.1, opacity: 0.75 }}
        transition={{
          yoyo: Infinity,
        }}
      >
        <Image
          src="/monster/SVG/kidaha-03.svg"
          alt="kidha"
          width={110}
          height={110}
        />
      </ImageWrapper>
    </Wrapper>
  )
}

export default Loader
