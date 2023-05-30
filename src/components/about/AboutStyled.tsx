import styled from 'styled-components';

export const About = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 0 0 0 6rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 0 1rem 0;
  }
`;

export const Br = styled.br``;

export const Span = styled.span`
  font-family: 'GowunDodum';

  user-select: none;
`;

export const Title = styled(Span)`
  font-size: 3rem;

  &:hover {
    color: #ffd369;
  }
`;

export const IntroduceSpan = styled(Span)`
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled(Box)`
  justify-content: center;
  align-items: center;
`;

export const IntrduceBox = styled(Box)`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const TechBox = styled(Box)`
  flex: 1;
`;
