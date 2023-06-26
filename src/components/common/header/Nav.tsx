import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickHome = () => navigate('/portfolio2');
  const handleClickProject = () => navigate('/portfolio2/project');
  const handleClickContact = () => navigate('/portfolio2/contact');

  return (
    <Layout>
      <List>
        <Item
          ispath={(pathname === '/portfolio2').toString()}
          onClick={handleClickHome}
        >
          Home
        </Item>
        <Item>Resume</Item>
        <Item
          ispath={(pathname === '/portfolio2/project').toString()}
          onClick={handleClickProject}
        >
          Project
        </Item>
        <Item
          ispath={(pathname === '/portfolio2/contact').toString()}
          onClick={handleClickContact}
        >
          Contact
        </Item>
      </List>
    </Layout>
  );
};

const Layout = styled.nav`
  flex: 1;

  display: flex;
`;

const List = styled.ul`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 2rem;
`;

const Item = styled.li<{ ispath?: string }>`
  display: inline-block;

  font-family: 'GowunDodum';
  font-size: 1.25rem;

  user-select: none;
  cursor: pointer;

  &::after {
    content: '';

    display: block;

    border-bottom: 3px solid rgb(66, 90, 115);

    transform: ${(prop) =>
      prop.ispath === 'true' ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 250ms ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
