import styled from 'styled-components';

export const Layout = styled.header`
  position: fixed;

  width: 100%;
  height: 5rem;

  display: flex;
  justify-content: space-between;

  padding: 0 6rem;

  color: #eeeeee;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const NavBox = styled.nav`
  flex: 1;

  display: flex;
`;

export const Nav = styled.ul`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 2rem;
`;

export const List = styled.li`
  font-family: 'GowunDodum';
  font-weight: bold;

  cursor: pointer;

  &:hover {
    color: #ffd369;
  }
`;
