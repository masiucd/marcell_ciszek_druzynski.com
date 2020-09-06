import { useState } from 'react'

type UseToggleReturnType = [boolean, () => void]

const useToggle = (initialState = false): UseToggleReturnType => {
  const [state, setState] = useState(initialState)

  const toggle = (): void => {
    setState((prev) => !prev)
  }

  return [state, toggle]
}

export default useToggle
