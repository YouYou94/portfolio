import { Link } from 'react-scroll';
import {
  Nav,
  LogoBox,
  Menu,
  Hamberger,
  Mode,
  DarkMode,
  DarkModeIcon,
  MenuBox,
  ListBox,
  List,
} from './NavStyled';

type NavProps = {
  toggleState: boolean;
  modeState: boolean;
  menuHandler: React.MouseEventHandler<HTMLDivElement>;
  listHandler: React.MouseEventHandler<HTMLLIElement>;
  modeHandler: React.MouseEventHandler<HTMLDivElement>;
};

export const NavUI = ({
  toggleState,
  modeState,
  menuHandler,
  listHandler,
  modeHandler,
}: NavProps) => {
  return (
    <Nav mode={modeState.toString()}>
      <LogoBox>로고</LogoBox>
      <Menu toggle={toggleState.toString()} onClick={menuHandler}>
        <Hamberger mode={modeState.toString()}></Hamberger>
        <Hamberger mode={modeState.toString()}></Hamberger>
        <Hamberger mode={modeState.toString()}></Hamberger>
      </Menu>
      <Mode>
        <DarkMode mode={modeState.toString()} onClick={modeHandler}>
          <DarkModeIcon onClick={modeHandler} />
        </DarkMode>
      </Mode>
      <MenuBox toggle={toggleState.toString()} mode={modeState.toString()}>
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
