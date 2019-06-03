import styled from 'styled-components';
import { colours } from '../Globalstyles';

export const Nav = styled.nav`
  width: 100%;
  #nav-icon {
    display: none;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    width: 80%;
    position: relative;
    margin: 0 auto;
    padding: 1rem;
    li {
      padding: 2rem;
      margin: 0 2rem 0 0;
      #main-link {
        position: absolute;
        left: 17px;
        text-shadow: 1px 1px ${colours.black};
        font-size: 2.2rem;
      }
      a {
        font-size: 1.6rem;
        color: ${colours.white};
        transition: all 0.3s;
        &:hover {
          transition: all 0.3s;
          color: ${colours.black};
        }
      }
    }
  }
`;
