import styled, { keyframes } from 'styled-components';

export const Cover = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 4rem 1rem;

  background-color: #222831;

  @media screen and (max-width: 768px) {
    padding: 4rem 1rem 1rem 1rem;
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
  color: #eeeeee;

  user-select: none;

  &:hover {
    color: #ffd369;
  }
`;

export const Title = styled(Span)`
  font-family: 'Anton';
  font-size: 5rem;
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

export const Mouse = styled.div`
  width: 2.3rem;
  height: 3.3rem;

  display: flex;
  justify-content: center;

  border: 3px solid #eeeeee;
  border-radius: 25px;
  padding-top: 0.5rem;
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

export const Scroller = styled.div`
  height: 0.6rem;

  border: 2px solid #eeeeee;

  animation: ${ScrollMove} 2s ease-out infinite;
`;
