import styled, { keyframes } from 'styled-components';

export const Layout = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  user-select: none;

  &:hover {
    color: #ffd369;
  }
`;

export const TitleBox = styled(Box)`
  flex: 2;
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

export const ClickBox = styled.div<{ mode: string }>`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    border-left: 5px solid
      ${(prop) => (prop.mode === 'true' ? '#eeeeee' : '#393e46')};
    border-bottom: 5px solid
      ${(prop) => (prop.mode === 'true' ? '#eeeeee' : '#393e46')};
  }
`;

const Move = keyframes`
   0% {
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(.5rem) ;
    opacity: 0;
  }
`;

export const ClickSpan = styled(Span)`
  font-family: 'Anton';
  font-size: 2rem;

  animation: ${Move} 2s ease-in infinite;

  cursor: pointer;

  &:hover {
    animation: none;
  }
`;
