import styled from 'styled-components';
import { colours } from '../Globalstyles';

export const ClientForm = styled.form`
  /* padding: 3rem; */
  position: relative;
  bottom: 60px;
  input {
    width: 100%;
    padding: 1rem 1.4rem;
    border: none;
    border-radius: 1.3rem;
    transition: 0.3s ease-in-out;
    margin: 0.2rem;
    font-size: 1.3rem;
    display: inline-block;

    &:focus {
      border: 2px solid ${colours.black};
      transition: 0.3s ease-in-out;
    }
  }
  button {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
`;
