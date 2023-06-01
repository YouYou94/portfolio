import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export const Title = styled.span`
  font-family: 'Anton';
  font-size: 5rem;

  margin-top: 2rem;

  &:hover {
    color: #ffd369;
  }

  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
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
