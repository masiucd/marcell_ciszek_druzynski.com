<h1>
  <a href="https://framer-motion-app.vercel.app/">

    Framer Motion Sandbox  λ🤓🎸

  </a>
</h1>

## Table of Contents

- [About](#about);
- [Tools](#tools)
- [Accordian](#accordian)
- [Variants](#variants)
- [Flipping card](#flipp-card)

## About <a name = "about"></a>

Framer motion Sandbox with different examples.

## Tools <a name = "tools"></a>

- React
- Next js
- Typescript
- Styled components 💅🏻
- Framer motion

## Accordian <a name = "accordian"></a>

```tsx
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import useToggle from '../src/hooks/useToggle'
import styled from 'styled-components'

interface AccordianProps {
  title?: string
}

const Article = styled.article`
  h2 {
    text-align: center;
    cursor: pointer;
    z-index: 5;
    position: relative;
  }
`
const StyledSection = styled(motion.section)`
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
  padding: 1em;
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.main};
  p {
    color: ${({ theme }) => theme.colors.main};
  }
`

const Accordian: React.FC<AccordianProps> = ({
  title = 'click on me',
  children,
}) => {
  const [isOn, toggleIsOn] = useToggle()
  return (
    <Article>
      <h2 role="button" onClick={toggleIsOn}>
        {title}
      </h2>
      <AnimatePresence>
        {isOn && (
          <StyledSection
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {children ? (
              children
            ) : (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                quos, eum at nesciunt quas commodi sit fugiat. Atque, ad aut id
                ....
              </p>
            )}
          </StyledSection>
        )}
      </AnimatePresence>
    </Article>
  )
}
export default Accordian
```

## Variants <a name = "variants"></a>

```tsx
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import useToggle from '../src/hooks/useToggle'
import styled from 'styled-components'

interface AccordianProps {
  title?: string
}

const Article = styled.article`
  h2 {
    text-align: center;
    cursor: pointer;
    z-index: 5;
    position: relative;
  }
`
const StyledSection = styled(motion.section)`
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
  padding: 1em;
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.main};
  p {
    color: ${({ theme }) => theme.colors.main};
  }
`

const Accordian: React.FC<AccordianProps> = ({
  title = 'click on me',
  children,
}) => {
  const [isOn, toggleIsOn] = useToggle()
  const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  }
  return (
    <Article>
      <h2 role="button" onClick={toggleIsOn}>
        {title}
      </h2>
      <AnimatePresence>
        {isOn && (
          <StyledSection
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {children ? (
              children
            ) : (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                quos, eum at nesciunt quas commodi sit fugiat. Atque, ad aut id
                ....
              </p>
            )}
          </StyledSection>
        )}
      </AnimatePresence>
    </Article>
  )
}
export default Accordian
```

## Flipping card <a name = "flipp-card"></a>

```tsx
const Card = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.colors.paragraph};
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    font-size: 2rem;
    display: grid;
    place-items: center;
  }

  .back {
    color: ${(props) => props.theme.colors.main};
    background: ${(props) => props.theme.colors.secondary};
    transform: rotateX(180deg);
  }

  .front {
    color: ${(props) => props.theme.colors.main};
    background: ${(props) => props.theme.colors.highlight};
  }
`
type Direction = 'X' | 'Y'

interface Props {
  rotateDirection?: Direction
}

export const FlippingCard = ({ rotateDirection = 'X' }: Props) => {
  return (
    <Container>
      <Card
        animate={{ transition: { duration: 0.4 } }}
        whileHover={
          rotateDirection === 'X' ? { rotateX: 180 } : { rotateY: 180 }
        }
      >
        <div className="face front">front</div>
        <div className="face back">back</div>
      </Card>
    </Container>
  )
}
```
