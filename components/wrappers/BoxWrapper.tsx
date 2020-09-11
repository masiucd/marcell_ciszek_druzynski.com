import React from 'react'
import Box from '../elements/Box'
import styled from 'styled-components'

const StyledBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-basis: 100%;
  height: 100%;
  padding: 4em 2em;
`

const BoxWrapper = () => {
  const [boxes, setBoxes] = React.useState(() => Array.from(Array(5).keys()))

  return (
    <StyledBox>
      {boxes.map((box) => (
        <Box key={box} box={box + 1} />
      ))}
    </StyledBox>
  )
}
export default BoxWrapper
