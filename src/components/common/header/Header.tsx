import styled from 'styled-components';
import { Logo } from './Logo';
import { ModeChanger } from './ModeChanger';
import { useRecoilState } from 'recoil';
import { modeState } from '../../../recoil/atom';

export const Header = () => {
  const [mode, setMode] = useRecoilState(modeState);

  const handleClickMode = () => setMode(!mode);

  return (
    <Container>
      <Logo state={mode} />
      <ModeChanger state={mode} clickHandler={handleClickMode} />
    </Container>
  );
};

const Container = styled.header`
  position: fixed;

  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: space-between;

  padding: 0 2rem;

  z-index: 99;
`;
