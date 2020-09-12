import React from 'react'
import Box from '../elements/Box'
import styled from 'styled-components'

const StyledBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-basis: 100%;
  height: 70%;
  padding: 4em 2em;
`

const BoxWrapper = () => {
  const [boxes, setBoxes] = React.useState<string[]>([
    '#fa444c',
    '#9e8fc7',
    '#4f8cdd',
    '#3b2c41',
    '#a3ffc1',
  ])

  const shuffle = (list: string[]): string[] => {
    list.forEach((color, i) => {
      const j = Math.floor(Math.random() * i)
      const temp = color

      list[i] = list[j]
      list[j] = temp
    })
    return list
  }

  return (
    <>
      <button onClick={() => setBoxes(shuffle(boxes))}>shuffle</button>
      <StyledBox>
        {boxes.map((color, index) => (
          <Box key={color} box={index + 1} color={color} />
        ))}
      </StyledBox>
    </>
  )
}
export default BoxWrapper
