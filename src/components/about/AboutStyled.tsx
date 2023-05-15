import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(3rem);
}
to{
  opacity: 1;
  transform: none;
}`;

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10rem;

  background-color: rgb(40, 40, 40);
  color: rgb(255, 255, 255);

  font-family: 'GowunDodum';

  gap: 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;

  font-size: 2rem;
`;

export const AboutLabel = styled.label`
  font-size: 1.1rem;

  animation: ${FadeIn} 1.5s ease-in-out;
`;
