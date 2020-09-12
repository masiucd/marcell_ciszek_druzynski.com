import React from 'react'
import * as _ from 'lodash'
import Box from '../elements/Box'
import styled from 'styled-components'

const StyledBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  height: 70%;
  padding: 4em 2em;
  margin: 2em auto;
`

const BoxWrapper = () => {
  const [boxes, setBoxes] = React.useState<string[]>([
    '#fa444c',
    '#9e8fc7',
    '#4f8cdd',
    '#3b2c41',
    '#a3ffc1',
  ])

  return (
    <>
      <button onClick={() => setBoxes(_.shuffle(boxes))}>shuffle</button>
      <StyledBox>
        {boxes.map((color, index) => (
          <Box key={color} box={index + 1} color={color} />
        ))}
      </StyledBox>
    </>
  )
}
export default BoxWrapper
