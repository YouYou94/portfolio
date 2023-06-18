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
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const IntroduceBox = styled.div`
  width: 48rem;

  display: flex;
  flex-direction: column;

  padding: 1rem;

  gap: 1rem;

  @media screen and (max-width: 1024px) {
    width: 48rem;
  }

  @media screen and (max-width: 768px) {
    width: 30rem;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'GowunDodum';
  font-size: 1.125rem;

  gap: 1rem;
`;

export const TechBox = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'GowunDodum';
  font-size: 1.125rem;

  gap: 1rem;
`;

export const IntroduceImg = styled.img`
  width: 20rem;

  @media screen and (max-width: 768px) {
    width: 10rem;
  }
`;

export const H3 = styled.h3`
  font-family: 'Alkatra';
  font-size: 1.75rem;

  border-bottom: 2px solid rgb(204, 204, 204);

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
