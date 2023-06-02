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
  Item,
  ResponsiveMenu,
  ResponsiveList,
  ResponsiveItem,
  ItemSpan,
} from './HeaderStyled';
import { useRecoilState } from 'recoil';
import { modeState } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useRecoilState(modeState);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleClickHomeNavigate = () => {
    setIsToggle(!isToggle);
    navigate('/portfolio');
  };

  const handleClickAboutNavigate = () => {
    setIsToggle(!isToggle);
    navigate('/portfolio/about');
  };

  const handleClickProjectNavigate = () => {
    setIsToggle(!isToggle);
    navigate('/portfolio/project');
  };

  const handleClickContactNavigate = () => {
    setIsToggle(!isToggle);
    navigate('/portfolio/contact');
  };

  return (
    <Layout mode={mode.toString()}>
      <Logo>
        <LogoSpan
          mode={mode.toString()}
          onClick={() => navigate('/portfolio')}
          title="처음으로이동"
        >
          Y
        </LogoSpan>
      </Logo>
      <Hamberger
        mode={mode.toString()}
        toggle={isToggle.toString()}
        onClick={() => setIsToggle(!isToggle)}
      >
        <Bar />
        <Bar />
        <Bar />
      </Hamberger>
      {/* Default Menu */}
      <Menu>
        <Item onClick={() => navigate('/portfolio')}>HOME</Item>
        <Item onClick={() => navigate('/portfolio/about')}>ABOUT</Item>
        <Item onClick={() => navigate('/portfolio/project')}>PROJECT</Item>
        <Item onClick={() => navigate('/portfolio/contact')}>CONTACT</Item>
      </Menu>

      {/* Responsive Menu */}
      <ResponsiveMenu mode={mode.toString()} toggle={isToggle.toString()}>
        <ResponsiveList>
          <ResponsiveItem onClick={handleClickHomeNavigate}>
            <ItemSpan>H</ItemSpan>
            <ItemSpan>O</ItemSpan>
            <ItemSpan>M</ItemSpan>
            <ItemSpan>E</ItemSpan>
          </ResponsiveItem>
          <ResponsiveItem onClick={handleClickAboutNavigate}>
            <ItemSpan>A</ItemSpan>
            <ItemSpan>B</ItemSpan>
            <ItemSpan>O</ItemSpan>
            <ItemSpan>U</ItemSpan>
            <ItemSpan>T</ItemSpan>
          </ResponsiveItem>
          <ResponsiveItem onClick={handleClickProjectNavigate}>
            <ItemSpan>P</ItemSpan>
            <ItemSpan>R</ItemSpan>
            <ItemSpan>O</ItemSpan>
            <ItemSpan>J</ItemSpan>
            <ItemSpan>E</ItemSpan>
            <ItemSpan>C</ItemSpan>
            <ItemSpan>T</ItemSpan>
          </ResponsiveItem>
          <ResponsiveItem onClick={handleClickContactNavigate}>
            <ItemSpan>C</ItemSpan>
            <ItemSpan>O</ItemSpan>
            <ItemSpan>N</ItemSpan>
            <ItemSpan>T</ItemSpan>
            <ItemSpan>A</ItemSpan>
            <ItemSpan>C</ItemSpan>
            <ItemSpan>T</ItemSpan>
          </ResponsiveItem>
        </ResponsiveList>
      </ResponsiveMenu>
      <Mode mode={mode.toString()} title="다크모드">
        <ModeIcon onClick={() => setMode(!mode)}>
          <Icon />
        </ModeIcon>
      </Mode>
    </Layout>
  );
};
