import { useState } from 'react';
import { NavUI } from './Nav.Presenter';

export const Nav = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleClickMenu = () => setIsToggle(!isToggle);

  const hadleClickList = () => setIsToggle(!isToggle);

  return (
    <NavUI
      toggleState={isToggle}
      menuHandler={handleClickMenu}
      listHandler={hadleClickList}
    />
  );
};
