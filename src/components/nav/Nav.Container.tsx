import { useState } from 'react';
import { NavUI } from './Nav.Presenter';
import { useRecoilState } from 'recoil';
import { modeState } from '../../recoil/atom';

export const Nav = () => {
  const [mode, setMode] = useRecoilState(modeState);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleClickMenu = () => setIsToggle(!isToggle);

  const hadleClickList = () => setIsToggle(!isToggle);

  const handleClickMode = () => setMode(!mode);

  return (
    <NavUI
      toggleState={isToggle}
      modeState={mode}
      menuHandler={handleClickMenu}
      listHandler={hadleClickList}
      modeHandler={handleClickMode}
    />
  );
};
