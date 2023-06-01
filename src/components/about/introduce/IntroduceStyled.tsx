import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntrduceBox = styled(Box)`
  justify-content: center;

  gap: 1rem;
`;

export const Span = styled.span`
  font-family: 'GowunDodum';

  user-select: none;
`;

export const Title = styled(Span)`
  font-family: 'Anton';
  font-size: 5rem;

  margin: 2rem 0;

  &:hover {
    color: #ffd369;
  }

  @media screen and (max-width: 1024px) {
    margin: 1rem 0;

    font-size: 3rem;
  }
`;

export const IntroduceTitle = styled(Span)`
  font-size: 1.75rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const IntroduceSpan = styled(Span)`
  font-size: 1.25rem;

  line-height: 1.75;

  @media screen and (min-width: 769px) {
    white-space: pre-wrap;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const EmpasisSpan = styled(Span)`
  transition: all 0.5s;

  ${IntroduceSpan}:hover & {
    color: #ffd369;

    transform: translateY(-0.5rem);
  }
`;
