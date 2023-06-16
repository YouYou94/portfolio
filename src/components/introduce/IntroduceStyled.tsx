import styled from 'styled-components';

export const Layout = styled.section`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    gap: 1rem;
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1025px) {
    flex: 1;

    padding: 0 3rem;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Introduce = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'GowunDodum';
  font-size: 1.125rem;

  gap: 1rem;

  @media screen and (min-width: 1025px) {
    flex: 1;

    padding: 0 3rem;
  }

  @media screen and (max-width: 1024px) {
    width: 48rem;

    padding: 0 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 30rem;

    padding: 0 0.5rem;

    font-size: 1rem;
  }
`;

export const IntroduceImg = styled.img`
  width: 25rem;
`;

export const H3 = styled.h3`
  font-family: 'Alkatra';
  font-size: 1.75rem;

  border-bottom: 2px solid rgb(204, 204, 204);

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
