import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;

  bottom: 0;

  width: 100%;
  height: 3rem;

  display: flex;

  padding: 0 2rem;

  background-color: rgb(245, 245, 245);
`;

export const List = styled.ul`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.li`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  cursor: pointer;

  &:hover {
    background-color: rgb(220, 220, 220);
  }
`;

export const NavButton = styled.button<{ icon: any }>`
  width: 2rem;
  height: 2rem;

  border: none;

  background-image: url(${(prop) => prop.icon});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
`;
