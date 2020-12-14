import React from 'react'
import styled from 'styled-components'
import SimpleAnimate from '../../components/animate/simple-animate'

const AnimateWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`

const AnimatePage = () => {
  return (
    <AnimateWrapper>
      <SimpleAnimate />
    </AnimateWrapper>
  )
}
export default AnimatePage
