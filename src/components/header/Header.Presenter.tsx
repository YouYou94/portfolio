import { Link } from 'react-scroll';
import { Header, LogoBox, NavBox, Nav, List } from './HeaderStyled';

export const HeaderUI = () => {
  return (
    <Header>
      <LogoBox>로고</LogoBox>
      <NavBox>
        <Nav>
          <Link to="1" spy={true} smooth={true}>
            <List>Home</List>
          </Link>
          <Link to="2" spy={true} smooth={true}>
            <List>About</List>
          </Link>
          <Link to="3" spy={true} smooth={true}>
            <List>Project</List>
          </Link>
          <Link to="4" spy={true} smooth={true}>
            <List>Contact</List>
          </Link>
        </Nav>
      </NavBox>
    </Header>
  );
};
