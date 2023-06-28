import styled from 'styled-components';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { ModeChanger } from './ModeChanger';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../../recoil';

export const Header = () => {
  const mode = useRecoilValue(getMode);

  return (
    <Layout mode={mode.toString()}>
      <Logo />
      <Nav />
      <ModeChanger />
    </Layout>
  );
};

const Layout = styled.header<{ mode: string }>`
  position: fixed;

  width: 100%;
  height: 8rem;

  display: flex;
  justify-content: space-between;

  margin: 0 3rem;
  padding: 0 5rem;

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(34, 40, 49)'};
`;
