import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Nav = () => {
  return (
    <Layout>
      <List>
        <Item>
          <Link to="intro" spy={true} smooth={true}>
            HOME
          </Link>
        </Item>
        <Item>
          <Link to="project" spy={true} smooth={true}>
            PROJECT
          </Link>
        </Item>
        <Item>
          <Link to="contact" spy={true} smooth={true}>
            CONTACT
          </Link>
        </Item>
        <Item>
          <Anchor
            href="https://www.notion.so/kukuwhy/_-645e2f54a5e6439696d185d8c4b860c8?pvs=4"
            target="_blank"
          >
            RESUME
          </Anchor>
        </Item>
      </List>
    </Layout>
  );
};

const Layout = styled.nav`
  flex: 1;

  display: flex;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const List = styled.ul`
  flex: 1;

  display: flex;
  justify-content: flex-end;

  padding: 0 3rem;

  gap: 3rem;
`;

const Item = styled.li`
  position: relative;

  display: flex;
  align-items: center;

  font-family: 'Anton';

  cursor: pointer;

  &::after {
    position: absolute;

    content: '';

    bottom: 0;

    width: 0;
    height: 1rem;

    border-bottom: 2px solid rgb(66, 90, 115);

    opacity: 0;

    transition: all 0.5s;
  }

  &:hover {
    color: rgb(66, 90, 115);
  }

  &:hover::after {
    width: 100%;
    opacity: 1;
  }
`;

const Anchor = styled.a`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }
`;
