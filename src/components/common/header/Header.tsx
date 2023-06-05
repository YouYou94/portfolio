import styled from 'styled-components';
import { Logo } from './Logo';
import { ModeChanger } from './ModeChanger';
import { useRecoilState } from 'recoil';
import { modeState } from '../../../recoil/atom';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [mode, setMode] = useRecoilState(modeState);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const updateScroll = () => {
    setScrollPercent(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const handleClickMode = () => setMode(!mode);

  return (
    <Container scrollPercent={scrollPercent}>
      <Logo state={mode} />
      <ModeChanger state={mode} clickHandler={handleClickMode} />
    </Container>
  );
};

const Container = styled.header<{ scrollPercent: number }>`
  position: fixed;

  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  transition: all 0.5s;

  ${(prop) =>
    prop.scrollPercent >= 100
      ? 'background-color: rgb(34, 40, 49); border-bottom: 1px solid rgb(204, 204, 204); button { color: rgb(238, 238, 238); }'
      : ''}

  z-index: 99;
`;
