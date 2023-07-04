import styled from 'styled-components';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { ModeChanger } from './ModeChanger';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';
import { ResponsiveNav } from './ResponsiveNav';

export const Header = () => {
  const mode = useRecoilValue(getMode);

  return (
    <Layout mode={mode.toString()}>
      <Logo />
      <Nav />
      <ResponsiveNav />
      <ModeChanger />
    </Layout>
  );
};

const Layout = styled.header<{ mode: string }>`
  position: fixed;

  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid rgb(204, 204, 204, 0.5);
  padding: 0 3rem;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(34, 40, 49)' : 'rgb(255, 255, 255)'};

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(34, 40, 49)'};

  @media screen and (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;
