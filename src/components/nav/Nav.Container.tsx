import { useState } from 'react';
import { NavUI } from './Nav.Presenter';
import { useRecoilState } from 'recoil';
import { modeState } from '../../recoil/atom';
import { useLocation, useNavigate } from 'react-router-dom';

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useRecoilState(modeState);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleClickLogo = () => navigate('/portfolio');

  const handleClickMenu = () => setIsToggle(!isToggle);

  const hadleClickList = () => {
    if (location.pathname !== '/portfolio') navigate('/portfolio');

    setIsToggle(!isToggle);
  };

  const handleClickMode = () => setMode(!mode);

  return (
    <NavUI
      toggleState={isToggle}
      modeState={mode}
      logoHandler={handleClickLogo}
      menuHandler={handleClickMenu}
      listHandler={hadleClickList}
      modeHandler={handleClickMode}
    />
  );
};
