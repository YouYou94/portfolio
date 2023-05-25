import { Link } from 'react-scroll';
import {
  Nav,
  LogoBox,
  Menu,
  Hamberger,
  DarkMode,
  MenuBox,
  ListBox,
  List,
} from './NavStyled';

type NavProps = {
  toggleState: boolean;
  menuHandler: React.MouseEventHandler<HTMLDivElement>;
  listHandler: React.MouseEventHandler<HTMLLIElement>;
};

export const NavUI = ({ toggleState, menuHandler, listHandler }: NavProps) => {
  return (
    <Nav>
      <LogoBox>로고</LogoBox>
      <Menu isToggle={toggleState.toString()} onClick={menuHandler}>
        <Hamberger></Hamberger>
        <Hamberger></Hamberger>
        <Hamberger></Hamberger>
      </Menu>
      <DarkMode>다크모드</DarkMode>
      <MenuBox isToggle={toggleState.toString()}>
        <ListBox>
          <Link to="1" spy={true} smooth={true}>
            <List onClick={listHandler}>HOME</List>
          </Link>
          <Link to="2" spy={true} smooth={true}>
            <List onClick={listHandler}>ABOUT</List>
          </Link>
          <Link to="3" spy={true} smooth={true}>
            <List onClick={listHandler}>PROJECT</List>
          </Link>
          <Link to="4" spy={true} smooth={true}>
            <List onClick={listHandler}>CONTACT</List>
          </Link>
        </ListBox>
      </MenuBox>
    </Nav>
  );
};
