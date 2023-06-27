import styled from 'styled-components';
import { Logo } from './Logo';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <Layout>
      <Logo />
      <Menu />
    </Layout>
  );
};

const Layout = styled.header`
  position: relative;

  height: 15rem;

  display: flex;
  justify-content: space-between;

  margin: 0 10rem;
  padding-top: 10rem;
`;
