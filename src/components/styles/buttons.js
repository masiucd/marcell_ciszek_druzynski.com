import styled from 'styled-components';
import { colours } from './Globalstyles';

export const BtnPrimary = styled.button`
  padding: 0.5rem 1rem;
  background: ${colours.purple};
  border-radius: 1rem;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
  &:hover {
    background: ${colours.black};
    transition: 0.3s ease-in-out;
    color: ${colours.white};
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
