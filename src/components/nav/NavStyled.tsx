import styled, { keyframes } from 'styled-components';
import ModeIconUrl from '../../assets/mode.png';

export const Nav = styled.header`
  position: fixed;

  width: 5rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid #393e46;

  background-color: #222831;
  color: #eeeeee;

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

export const Menu = styled(Box)<{ isToggle: string }>`
  > span {
    ${(prop) => (prop.isToggle === 'true' ? 'position: absolute' : '')};

    &:first-child {
      ${(prop) => (prop.isToggle === 'true' ? 'transform: rotate(45deg)' : '')};
    }

    &:nth-last-child(1) {
      ${(prop) =>
        prop.isToggle === 'true' ? 'transform: rotate(-45deg)' : ''};
    }

    &:nth-last-child(2) {
      ${(prop) => (prop.isToggle === 'true' ? 'opacity: 0' : '')};
    }
  }
`;

export const Mode = styled(Box)``;

export const Logo = styled.img``;

export const Hamberger = styled.span`
  width: 33px;
  height: 4px;

  margin-bottom: 5px;
  border-radius: 3px;

  background-color: #eeeeee;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  ${Menu}:hover & {
    background-color: #ffd369;
  }
`;

/* Menu */
export const MenuBox = styled.div<{ isToggle: string }>`
  position: absolute;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #222831;

  transition: ease 0.3s;

  z-index: 1;

  @media screen and (min-width: 769px) {
    ${(prop) => (prop.isToggle === 'true' ? ' left: 0' : 'left: -100vw')};
  }

  @media screen and (max-width: 768px) {
    ${(prop) => (prop.isToggle === 'true' ? ' top: 0' : 'top: -100vh')};
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
export const DarkModeBox = styled.div<{ mode: string }>`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(204, 204, 204)' : 'rgb(235, 235, 235)'};

  cursor: pointer;

  :hover {
    background-color: ${(prop) =>
      prop.mode === 'true' ? 'rgb(251, 251, 251)' : 'rgb(204, 204, 204)'};
  }

  @media screen and (max-width: 1024px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const DarkMode = styled(DarkModeBox)`
  transition: all 0.3s;

  ${(prop) =>
    prop.mode === 'true' ? 'transform: scaleX(-1) scaleY(-1);' : ''};
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
