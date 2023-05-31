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

  padding: 0 6rem 0 6rem;

  gap: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0 3rem 0 3rem;
  }
`;

export const TechBox = styled(Box)`
  flex-direction: row;

  gap: 0.5rem;
`;

export const TechBadge = styled.div<{ backgroundcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.25rem;
  padding: 0.1rem 0.5rem;

  background-color: ${(prop) => prop.backgroundcolor};
  color: #222831;

  font-family: 'Alkatra';
  font-size: 1rem;

  transition: all 0.75s;

  &:hover {
    transform: translateY(-0.125rem);
  }
`;

export const Span = styled.span`
  display: inline-block;

  font-family: 'GowunDodum';

  user-select: none;
`;

export const Title = styled(Span)`
  font-size: 3rem;

  &:hover {
    color: #ffd369;
  }
`;

export const IntroduceTitle = styled(Span)`
  font-size: 1.75rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const IntroduceSubTitle = styled(Span)`
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const IntroduceSpan = styled(Span)`
  font-size: 1.25rem;

  line-height: 1.75;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const EmpasisSpan = styled(Span)`
  transition: all 0.75s;

  ${IntroduceSpan}:hover & {
    color: #ffd369;

    transform: translateY(-0.125rem);
  }
`;
