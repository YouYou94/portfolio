import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;

  top: 0;

  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;

  padding: 0 2rem;

  background-color: rgb(30, 30, 90);
`;

export const BurgerIcon = styled.label`
  right: 1rem;

  display: inline-block;

  position: absolute;
  z-index: 2;

  margin: 0;
  padding: 1rem 0;

  cursor: pointer;
  user-select: none;
`;

export const BurgerSticks = styled.span<{ toggle: string }>`
  height: 3px;

  display: block;

  position: relative;

  width: 20px;

  background: rgb(255, 255, 255);

  transition: background 0.2s ease-out;

  ${(prop) => (prop.toggle === 'true' ? 'background: transparent;' : '')}

  &:after,
  &:before {
    content: '';

    width: 100%;
    height: 100%;

    display: block;

    position: absolute;

    transition: all 0.2s ease-out;

    background: rgb(255, 255, 255);
  }
  &:before {
    ${(prop) =>
      prop.toggle === 'true' ? 'transform: rotate(45deg);' : 'top: -6px;'}
  }
  &:after {
    ${(prop) =>
      prop.toggle === 'true' ? 'transform: rotate(-45deg);' : 'top: 6px;'}
  }
`;

export const MenuBox = styled.div<{ toggle: string }>`
  position: absolute;
  z-index: 1;

  top: 0;

  width: 100%;
  height: 100vh;

  display: flex;

  background-color: rgb(30, 30, 90);

  transition: all 0.5s ease-out;

  ${(prop) => (prop.toggle === 'true' ? 'right:0;' : 'right:-100%;')}
`;

export const List = styled.ul`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  width: 100%;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: rgb(255, 255, 255);

  font-size: 2rem;

  cursor: pointer;

  transition: all 0.2s ease-out;

  &:hover {
    padding-right: 2rem;
  }
`;
