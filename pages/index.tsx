import Accordian from '../components/Accordian'
import Cards from '../components/Cards'
import Header from '../components/layout/Header'
import Modal from '../components/Modal'
import { PageWrapper } from '../components/styles/Wappers'
import useToggle from '../src/hooks/useToggle'

export const Home = (): JSX.Element => {
  const [showModal, toggleModal] = useToggle()
  return (
    <>
      <Header />
      <PageWrapper>
        <Accordian />
        <Cards toggleModal={toggleModal} />
      </PageWrapper>
      <Modal
        isOn={showModal}
        modalTitle="Hello Modal"
        modalText="some dummy text"
        onToggleModal={toggleModal}
      />
    </>
  )
}

export default Home
