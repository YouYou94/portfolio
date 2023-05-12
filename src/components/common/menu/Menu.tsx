import { useNavigate, useLocation } from 'react-router-dom';
import { Nav, List, Item, NavButton } from './MenuStyled';
import HOME from '../../../assets/menu/home.png';
import HOMECLICKED from '../../../assets/menu/home-clicked.png';
import ABOUT from '../../../assets/menu/about.png';
import ABOUTCLICKED from '../../../assets/menu/about-clicked.png';
import PROJECT from '../../../assets/menu/project.png';
import PROJECTCLICKED from '../../../assets/menu/project-clicked.png';

export const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);
  return (
    <Nav>
      <List>
        <Item>
          <NavButton
            onClick={() => navigate('/portfolio')}
            icon={location.pathname === '/portfolio' ? HOMECLICKED : HOME}
            title="홈"
          />
        </Item>
        <Item>
          <NavButton
            onClick={() => navigate('/portfolio/about')}
            icon={
              location.pathname === '/portfolio/about' ? ABOUTCLICKED : ABOUT
            }
            title="소개"
          />
        </Item>
        <Item>
          <NavButton
            onClick={() => navigate('/portfolio/project')}
            icon={
              location.pathname === '/portfolio/project'
                ? PROJECTCLICKED
                : PROJECT
            }
            title="프로젝트"
          />
        </Item>
      </List>
    </Nav>
  );
};
