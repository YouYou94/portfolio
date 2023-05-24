import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;

  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: space-between;

  padding: 0 5rem;

  background-color: #222831;
  color: #eeeeee;

  z-index: 1;

  // 반응형 웹
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const LogoBox = styled.div`
  width: 5rem;
`;

export const Logo = styled.img``;

export const NavBox = styled.nav`
  width: 20rem;

  display: flex;
`;

export const Nav = styled.ul`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.li`
  font-family: 'GowunDodum';

  cursor: pointer;

  &:hover {
    color: #ffd369;
  }
`;
