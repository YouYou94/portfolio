import styled, { keyframes } from 'styled-components';

export const Cover = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 1rem 0 0 6rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 0.5rem 0 0.5rem;
  }
`;

export const Br = styled.br``;

export const TitleBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Span = styled.span`
  user-select: none;

  &:hover {
    color: #ffd369;
  }
`;

export const Title = styled(Span)`
  font-family: 'Anton';
  font-size: 10rem;

  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }
`;

export const SubTitle = styled(Span)`
  font-family: 'Alkatra';
  font-size: 1.1rem;
`;

export const ScrollBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  gap: 1rem;
`;

export const Mouse = styled.div<{ mode: string }>`
  width: 2.3rem;
  height: 3.3rem;

  display: flex;
  justify-content: center;

  border: 3px solid ${(prop) => (prop.mode === 'true' ? '#393e46' : '#eeeeee')};
  border-radius: 25px;
  padding-top: 0.5rem;

  &:hover {
    border: 3px solid #ffd369;
  }
`;

const ScrollMove = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(.5rem);
    opacity: 0;
  }
`;

export const Scroller = styled.div<{ mode: string }>`
  height: 0.6rem;

  border: 2px solid ${(prop) => (prop.mode === 'true' ? '#222831' : '#eeeeee')};

  animation: ${ScrollMove} 2s ease-out infinite;

  ${Mouse}:hover & {
    border: 2px solid #ffd369;
  }
`;
