import React from 'react'

interface SliderInputProps {
  onRange: number
  onSetRange: React.Dispatch<React.SetStateAction<number>>
}

const SliderInput: React.FC<SliderInputProps> = ({ onRange, onSetRange }) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onSetRange(Number(evt.target.value))
  }
  return (
    <input
      type="range"
      min="-100"
      max="100"
      value={onRange}
      onChange={handleChange}
    />
  )
}
export default SliderInput
