import styled from 'styled-components';

export const About = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  border-top: 1px solid #eeeeee;
  padding: 1rem 6rem;

  background-color: #222831;

  @media screen and (max-width: 768px) {
    padding: 1rem 0 1rem 0;
  }
`;

export const Br = styled.br``;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

export const IntroduceBox = styled(Box)`
  flex: 1;

  flex-direction: column;
`;

export const TechBox = styled(Box)`
  flex: 1;

  flex-direction: column;

  gap: 1rem;
`;

export const Span = styled.span`
  font-family: 'GowunDodum';

  color: #eeeeee;

  user-select: none;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Title = styled(Span)`
  font-size: 3rem;

  &:hover {
    color: #ffd369;
  }
`;

export const Empasis = styled.span`
  font-weight: bold;

  ${Span}:hover & {
    color: #ffd369;
  }
`;

export const TeckImg = styled.img``;
