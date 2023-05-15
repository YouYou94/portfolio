import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Nav,
  BurgerIcon,
  BurgerSticks,
  MenuBox,
  List,
  Item,
} from './MenuStyled';

export const Menu = () => {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState<string>('false');

  const handleClickToggle = () => {
    if (isToggled === 'true') setIsToggled('false');
    else setIsToggled('true');
  };

  const handleClickHome = () => {
    navigate('/portfolio');

    setIsToggled('false');
  };

  const handleClickAbout = () => {
    navigate('/portfolio/about');

    setIsToggled('false');
  };

  const handleClickProject = () => {
    navigate('/portfolio/project');

    setIsToggled('false');
  };

  return (
    <>
      <Nav>
        <BurgerIcon onClick={handleClickToggle}>
          <BurgerSticks toggle={isToggled}></BurgerSticks>
        </BurgerIcon>
        <MenuBox toggle={isToggled}>
          <List>
            <Item onClick={handleClickHome}>HOME</Item>
            <Item onClick={handleClickAbout}>ABOUT</Item>
            <Item onClick={handleClickProject}>PROJECT</Item>
          </List>
        </MenuBox>
      </Nav>
    </>
  );
};
