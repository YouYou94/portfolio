import { useState } from 'react';
import {
  Layout,
  Logo,
  LogoSpan,
  Mode,
  ModeIcon,
  Icon,
  Hamberger,
  Bar,
  Menu,
  List,
  Item,
  ItemSpan,
} from './HeaderStyled';
import { useRecoilState } from 'recoil';
import { modeState } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useRecoilState(modeState);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleClickHomeNavigate = () => navigate('/portfolio');

  const handleClickAboutNavigate = () => navigate('/portfolio/about');

  const handleClickProjectNavigate = () => navigate('/portfolio/about');

  const handleClickContactNavigate = () => navigate('/portfolio/about');

  return (
    <Layout>
      <Logo>
        <LogoSpan mode={mode.toString()} onClick={handleClickHomeNavigate}>
          Y
        </LogoSpan>
      </Logo>
      <Mode mode={mode.toString()}>
        <ModeIcon onClick={() => setMode(!mode)}>
          <Icon />
        </ModeIcon>
      </Mode>
      <Hamberger
        mode={mode.toString()}
        toggle={isToggle.toString()}
        onClick={() => setIsToggle(!isToggle)}
      >
        <Bar />
        <Bar />
        <Bar />
      </Hamberger>
      <Menu mode={mode.toString()} toggle={isToggle.toString()}>
        <List>
          <Item onClick={handleClickHomeNavigate}>
            <ItemSpan>H</ItemSpan>
            <ItemSpan>O</ItemSpan>
            <ItemSpan>M</ItemSpan>
            <ItemSpan>E</ItemSpan>
          </Item>
          <Item onClick={handleClickAboutNavigate}>
            <ItemSpan>A</ItemSpan>
            <ItemSpan>B</ItemSpan>
            <ItemSpan>O</ItemSpan>
            <ItemSpan>U</ItemSpan>
            <ItemSpan>T</ItemSpan>
          </Item>
          <Item onClick={handleClickProjectNavigate}>
            <ItemSpan>P</ItemSpan>
            <ItemSpan>R</ItemSpan>
            <ItemSpan>O</ItemSpan>
            <ItemSpan>J</ItemSpan>
            <ItemSpan>E</ItemSpan>
            <ItemSpan>C</ItemSpan>
            <ItemSpan>T</ItemSpan>
          </Item>
          <Item onClick={handleClickContactNavigate}>
            <ItemSpan>C</ItemSpan>
            <ItemSpan>O</ItemSpan>
            <ItemSpan>N</ItemSpan>
            <ItemSpan>T</ItemSpan>
            <ItemSpan>A</ItemSpan>
            <ItemSpan>C</ItemSpan>
            <ItemSpan>T</ItemSpan>
          </Item>
        </List>
      </Menu>
    </Layout>
  );
};
