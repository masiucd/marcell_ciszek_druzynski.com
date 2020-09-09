import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import useToggle from '../src/hooks/useToggle'
import styled from 'styled-components'

interface AccordianProps {
  title?: string
}

const Article = styled.article`
  /* margin-top: calc(12rem + 10px); */
  margin-top: ${({ theme }) => `calc(${theme.size.navHeight} - 50px)`};
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
            // initial={{ opacity: 0, height: 0 }}
            // animate={{ opacity: 1, height: 'auto' }}
            initial="closed"
            animate="open"
            variants={variants}
            exit="closed"
            transition={{ damping: 100 }}
          >
            {children ? (
              children
            ) : (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                quos, eum at nesciunt quas commodi sit fugiat. Atque, ad aut id
                ea soluta optio eum non dicta reprehenderit magni amet, quis
                mollitia odit itaque voluptatem delectus! Corporis amet
                aspernatur culpa repudiandae animi quasi laboriosam beatae
                alias, sequi veniam, sapiente accusamus natus similique
                architecto, incidunt molestiae a ullam perferendis doloribus
                optio praesentium dicta illo odio ducimus. Voluptatum non
                aspernatur obcaecati laudantium provident molestias sunt harum
                architecto iste distinctio saepe beatae explicabo temporibus
                tempore natus quidem quod rem, accusantium earum atque minus
                possimus consectetur cumque quae? Alias quos dolores beatae
                eligendi commodi ipsa quasi adipisci, porro laboriosam sed
                molestiae sint qui veritatis tempora labore doloribus dicta
                totam nostrum similique autem nesciunt inventore. Unde labore,
                impedit veniam quibusdam animi, minima dicta ullam, sequi
                blanditiis hic suscipit ratione exercitationem modi officia
                dolorum voluptate error rerum harum quos quae aliquid corrupti
                porro accusamus dignissimos! Illum, doloremque ut et natus non
                in? Aperiam voluptate magnam ipsam explicabo, ipsum accusamus
                provident facilis excepturi nobis maiores sunt quis animi
                laboriosam qui impedit ex ab modi delectus perferendis nulla non
                porro tempora. Ad ut tenetur, cum perferendis id incidunt
                adipisci sit obcaecati magni pariatur mollitia quod nemo nostrum
                maiores corporis facilis a architecto laborum non eligendi
                blanditiis sed hic? Officia asperiores aperiam exercitationem
                dolore laudantium tempora earum soluta eveniet facere itaque
                excepturi accusantium iste pariatur possimus culpa, rem ipsum
                nobis ea odio, qui nihil totam odit ratione. Nobis harum vero
                odio dolore rem, ratione enim repudiandae quo, quos voluptate
                unde perferendis ex aspernatur porro!
              </p>
            )}
          </StyledSection>
        )}
      </AnimatePresence>
    </Article>
  )
}
export default Accordian
