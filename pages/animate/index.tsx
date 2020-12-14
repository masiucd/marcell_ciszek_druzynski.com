import React, { useState } from 'react'
import styled from 'styled-components'
import { FlippingCard } from '../../components/animate/flipping-card'
import KeyFrame from '../../components/animate/key-frame'
import Loader from '../../components/animate/loader'
import SimpleAnimate from '../../components/animate/simple-animate'

const AnimateWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AnimatePage = () => {
  const [isLoading, setIsLoading] = useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])

  if (isLoading) {
    return <Loader />
  } else {
    return (
      <AnimateWrapper>
        <SimpleAnimate />
        <KeyFrame />
        <FlippingCard rotateDirection="X" />
        <FlippingCard rotateDirection="Y" />
      </AnimateWrapper>
    )
  }
}
export default AnimatePage
