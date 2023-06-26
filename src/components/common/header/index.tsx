import styled from 'styled-components';
import { Logo } from './Logo';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <Layout>
      <Logo />
      <Nav />
    </Layout>
  );
};

const Layout = styled.header`
  position: fixed;

  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: space-between;

  padding: 0 3rem;
`;
