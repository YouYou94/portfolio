import styled, { keyframes } from 'styled-components';
import ModeIconUrl from '../../assets/mode.png';

export const Nav = styled.header<{ mode: string }>`
  position: fixed;

  width: 5rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid #393e46;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : '#222831'};
  color: ${(prop) => (prop.mode === 'true' ? '#222831' : '#eeeeee')};

  z-index: 1;

  // 반응형 웹
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 3rem;

    flex-direction: row;

    border-bottom: 1px solid #393e46;
  }
`;

export const Box = styled.div`
  width: 5rem;
  height: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const LogoBox = styled(Box)``;

export const LogoSpan = styled.span`
  font-family: 'LilitaOne';
  font-size: 2.5rem;

  &:hover {
    color: #ffd369;
  }
`;

export const Menu = styled(Box)<{ toggle: string }>`
  > span {
    ${(prop) => (prop.toggle === 'true' ? 'position: absolute' : '')};

    &:first-child {
      ${(prop) => (prop.toggle === 'true' ? 'transform: rotate(45deg)' : '')};
    }

    &:nth-last-child(1) {
      ${(prop) => (prop.toggle === 'true' ? 'transform: rotate(-45deg)' : '')};
    }

    &:nth-last-child(2) {
      ${(prop) => (prop.toggle === 'true' ? 'opacity: 0' : '')};
    }
  }
`;

export const Logo = styled.img``;

export const Hamberger = styled.span<{ mode: string }>`
  width: 33px;
  height: 4px;

  margin-bottom: 5px;
  border-radius: 3px;

  background-color: ${(prop) => (prop.mode === 'true' ? '#222831' : '#eeeeee')};

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  ${Menu}:hover & {
    background-color: #ffd369;
  }
`;

/* Menu */
export const MenuBox = styled.div<{ toggle: string; mode: string }>`
  position: absolute;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : '#222831'};

  transition: ease 0.3s;

  z-index: 1;

  @media screen and (min-width: 769px) {
    ${(prop) => (prop.toggle === 'true' ? ' left: 0' : 'left: -100vw')};
  }

  @media screen and (max-width: 768px) {
    ${(prop) => (prop.toggle === 'true' ? ' top: 0' : 'top: -100vh')};
  }
`;

export const ListBox = styled.ul`
  width: 30rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const Move = keyframes`
  0% {
  }
  50% {
    transform: translateX(-.5rem);
  }1
  100% {
    transform: translateX(.5rem);
  }
`;

export const List = styled.li`
  width: 30rem;
  height: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Anton';
  font-size: 3rem;

  cursor: pointer;

  &:hover {
    color: #ffd369;

    background-color: rgb(57, 62, 70, 0.5);

    animation: ${Move} 2s ease-out infinite;
  }
`;

/* Mode */
export const Mode = styled(Box)``;

export const DarkModeBox = styled.div<{ mode: string }>`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${(prop) => (prop.mode === 'true' ? '' : '#eeeeee')};

  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const DarkMode = styled(DarkModeBox)`
  transition: all 0.3s;

  ${(prop) => (prop.mode === 'true' ? '' : 'transform: scaleX(-1) scaleY(-1)')};
`;

export const DarkModeIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  background-image: url(${ModeIconUrl});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    width: 1rem;
    height: 1rem;
  }
`;
