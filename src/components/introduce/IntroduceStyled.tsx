import styled from 'styled-components';

export const Layout = styled.section`
  height: calc(100vh - 4rem);

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  max-width: 48rem;

  display: flex;

  padding: 0 3rem;
`;

export const Tech = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;

  gap: 1rem;
`;

export const Introduce = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  font-family: 'GowunDodum';

  gap: 1rem;
`;

export const H3 = styled.h3`
  font-family: 'Alkatra';
  font-size: 1.25rem;
`;

export const Strong = styled.strong``;

export const Span = styled.span``;

export const TechBedge = styled.div<{ mode: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  padding: 0 1rem;

  font-family: 'Alkatra';

  border: 1px solid
    ${(prop) => (prop.mode === 'true' ? '' : 'rgb(66, 90, 115)')};
`;
