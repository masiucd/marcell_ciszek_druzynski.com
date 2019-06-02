import styled from 'styled-components';
import { colours } from './Globalstyles';

export const BtnPrimary = styled.button`
  padding: 0.5rem 1rem;
  background: ${colours.purple};
  border-radius: 1rem;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
  box-shadow: 0.5rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
  &:hover {
    background: ${colours.black};
    transition: 0.3s ease-in-out;
    color: ${colours.white};
    box-shadow: 0.8rem 0.8rem 0.7rem rgba(0, 0, 0, 0.2);
  }
`;

export const LinkBtn = styled(BtnPrimary)`
  padding: 0.4rem 0.8rem;
  background: ${colours.black};
  color: ${colours.white};
  &:hover {
    background: ${colours.purple};
    transition: 0.3s ease-in-out;
    color: ${colours.black};
  }
`;
