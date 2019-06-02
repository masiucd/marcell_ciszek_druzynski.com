import styled from 'styled-components';
import { colours } from '../Globalstyles';

export const Card = styled.div`
  box-shadow: 0.5rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-top: 2rem;
  color: ${colours.white};
  height: 100%;
  &:hover {
    transition: 0.3s;
    box-shadow: 0.8rem 0.8rem 0.7rem rgba(0, 0, 0, 0.2);
  }
  .card-header {
    font-size: 3rem;
  }

  .card-body {
  }

  form {
    padding: 4rem;
    label {
      display: block;
      margin: 0.5rem 1rem;
      font-size: 2rem;
    }
    input {
      width: 90%;
      padding: 1rem 1.4rem;
      border: none;
      border-radius: 1.3rem;
      transition: 0.3s ease-in-out;
      margin: 1rem;
      &:focus {
        border: 4px solid ${colours.black};
        transition: 0.3s ease-in-out;
      }
    }
  }
`;
