import styled, { keyframes } from 'styled-components';
import Scroll from '../../assets/scroll.png';

export const Section = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;

  padding: 5rem 1rem 1rem 1rem;

  background-color: #222831;
`;

export const CoverBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;

  @media screen and (min-width: 769px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    padding-left: 3rem;
  }
`;

export const Title = styled.span`
  margin-left: 0.3rem;

  font-family: 'GowunDodum';
  font-size: 5rem;

  color: #eeeeee;

  text-align: center;

  &:hover {
    color: #ffd369;
  }
`;

export const HeaderBox = styled(Box)`
  @media screen and (max-width: 768px) {
    padding-left: 7rem;
  }
`;

export const HeaderTitle = styled(Title)`
  font-size: 1rem;
`;

export const NavBox = styled(Box)`
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding-left: 9rem;
  }
`;

export const ScrollBox = styled(Box)`
  @media screen and (max-width: 768px) {
    flex: 1;

    flex-direction: column;
    align-items: center;
  }
`;

const move = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(.5rem);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(.5rem);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ScrollIcon = styled.div`
  width: 2rem;
  height: 2rem;

  margin-left: 0.2rem;

  background-image: url(${Scroll});
  background-repeat: no-repeat;
  background-size: cover;

  animation: ${move} 3s ease-out infinite;
`;
