import Accordian from '../components/Accordian'
import Cards from '../components/Cards'
import { PageWrapper } from '../components/styles/Wappers'

export const Home = (): JSX.Element => (
  <>
    <PageWrapper>
      <Accordian />
      <Cards />
    </PageWrapper>
  </>
)

export default Home
