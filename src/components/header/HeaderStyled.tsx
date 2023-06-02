import styled, { keyframes } from 'styled-components';
import ModeIconUrl from '../../assets/mode.png';

export const Layout = styled.header<{ mode: string }>`
  height: 5rem;

  display: flex;
  justify-content: space-between;

  background-color: ${(prop) =>
    prop.mode === 'true' ? '#222831' : 'rgb(255, 255, 255)'};
  color: ${(prop) => (prop.mode === 'true' ? '#eeeeee' : '#222831')};
`;

export const Box = styled.div`
  width: 5rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;

  cursor: pointer;
`;

export const Logo = styled(Box)`
  margin-left: 0.5rem;
`;

export const LogoSpan = styled.span<{ mode: string }>`
  font-family: 'LilitaOne';
  font-size: 2.5rem;

  color: ${(prop) => (prop.mode === 'true' ? '#eeeeee' : '#222831')};

  &:hover {
    color: #ffd369;
  }
`;

export const Mode = styled(Box)<{ mode: string }>`
  > div {
    background-color: ${(prop) => (prop.mode === 'true' ? '#eeeeee' : '')};

    transition: all 0.3s;

    ${(prop) =>
      prop.mode === 'true' ? 'transform: scaleX(-1) scaleY(-1)' : ''};

    &:hover {
      background-color: #ffd369;
    }
  }
`;

export const ModeIcon = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  background-image: url(${ModeIconUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

/* Default Menu */
export const Menu = styled.ul`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Item = styled.li`
  font-family: 'Anton';
  font-size: 1.5rem;

  cursor: pointer;

  &:hover {
    color: #ffd369;
  }
`;

/* Responsive Menu */
export const Hamberger = styled(Box)<{ mode: string; toggle: string }>`
  flex-direction: column;

  & > Span {
    background-color: ${(prop) =>
      prop.mode === 'true' ? '#eeeeee' : '#222831'};

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

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const Bar = styled.span`
  width: 33px;
  height: 4px;

  margin-bottom: 5px;
  border-radius: 3px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  ${Hamberger}:hover & {
    background-color: #ffd369;
  }
`;

export const ResponsiveMenu = styled.div<{ mode: string; toggle: string }>`
  position: absolute;

  width: 100vw;
  height: 100vh;

  ${(prop) => (prop.toggle === 'true' ? ' top: 0' : 'top: -100vh')};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(prop) =>
    prop.mode === 'true' ? '#222831' : 'rgb(245, 245, 245)'};
  color: ${(prop) => (prop.mode === 'true' ? '#eeeeee' : '#222831')};

  transition: ease 0.3s;

  z-index: 1;
`;

export const ResponsiveList = styled.ul`
  width: 30rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

const Move = keyframes`
  0% {
  }
  50% {
    transform: translateX(.5rem);
  }1
  100% {
    transform: translateX(-.5rem);
  }
`;

export const ResponsiveItem = styled.li`
  width: 18rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  &:hover {
    color: #ffd369;

    animation: ${Move} 2s ease-out infinite;
  }
`;

export const ItemSpan = styled.span`
  font-family: 'Anton';
  font-size: 4rem;
`;
