import styled from 'styled-components';

export const Detail = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1rem 1rem 2rem 6rem;

  gap: 2rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 0.5rem 2rem 0.5rem;
  }
`;

export const Line = styled.div`
  border: 1px solid #393e46;
`;

export const Box = styled.div`
  display: flex;
`;

export const Span = styled.span`
  padding: 0 1rem;

  font-family: 'GowunDodum';

  white-space: pre-wrap;
`;

export const TitleBox = styled(Box)``;

export const Title = styled(Span)`
  font-size: 3rem;
`;

export const LinkBox = styled(Box)`
  padding: 0 1rem;

  gap: 0.25rem;
`;

export const Link = styled.a<{ mode: string }>`
  color: ${(prop) => (prop.mode === 'true' ? '#222831' : '#eeeeee')};

  text-decoration: underline;

  &:hover {
    color: #ffd369;
  }
`;

export const ContentBox = styled(Box)`
  flex-direction: column;

  gap: 0.5rem;
`;

export const ContentTitle = styled(Span)`
  font-size: 1.5rem;
`;

export const StackBox = styled(Box)`
  padding: 0 1rem;

  gap: 0.5rem;
`;

export const ListBox = styled(Box)`
  align-items: center;

  padding: 0 1.25rem;
`;

export const Dot = styled.div`
  border: 3px solid #eeeeee;
  border-radius: 50%;
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
  font-size: 0.75rem;
`;
