import styled from 'styled-components';

export const About = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  border-top: 1px solid #eeeeee;
  padding: 1rem 1rem;

  background-color: #222831;
`;

export const Br = styled.br``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroduceBox = styled(Box)`
  justify-content: center;
  align-items: center;
`;

export const TechBox = styled(Box)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export const Span = styled.span`
  font-family: 'GowunDodum';

  color: #eeeeee;

  user-select: none;
`;

export const Title = styled(Span)`
  font-size: 4rem;

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
