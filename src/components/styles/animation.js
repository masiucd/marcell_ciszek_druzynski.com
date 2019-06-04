import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const shake = keyframes`
10%, 90% {
  transform: translate3d(-1px, 0, 0);
}
20%, 80% {
  transform: translate3d(2px, 0, 0);
}
30%, 50%, 70% {
  transform: translate3d(-4px, 0, 0);
}
40%, 60% {
  transform: translate3d(4px, 0, 0);
}
`;
