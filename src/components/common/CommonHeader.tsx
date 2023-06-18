import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { mode } from '../../recoil';
import { faSun, faMoon, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CommonHeader = () => {
  const [isMode, setIsMode] = useRecoilState<boolean>(mode);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const handleClickMode = () => setIsMode(!isMode);

  const handleClickUp = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  const updateScroll = () => {
    setScrollPercent(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <Header mode={isMode.toString()} scroll={scrollPercent}>
      <Bar
        scroll={scrollPercent}
        mode={isMode.toString()}
        onClick={handleClickUp}
      >
        {scrollPercent >= 100 ? (
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        ) : (
          <Logo title="유병현 포트폴리오입니다.">Y</Logo>
        )}
      </Bar>
      <ModeChanger onClick={handleClickMode}>
        {isMode ? (
          <FontAwesomeIcon icon={faSun} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faMoon} size="lg" />
        )}
      </ModeChanger>
    </Header>
  );
};

const Header = styled.header<{ mode: string; scroll: number }>`
  ${(prop) => (prop.scroll >= 100 ? '' : 'position: fixed')};

  width: 100%;
  height: ${(prop) => (prop.scroll >= 100 ? '0' : '4rem')};

  display: flex;
  justify-content: space-between;

  padding: 0 1rem;

  > div {
    &:first-child {
    }
    ${(prop) =>
      prop.scroll >= 100
        ? `position:fixed;border-radius: 50%; ${
            prop.mode === 'true'
              ? 'background-color: rgb(66, 90, 115, .9)'
              : 'background-color: rgb(245, 245, 245, .9)'
          }; &:first-child {
            top: 1rem;
          } &:last-child { top: 6rem;  } z-index: 99;`
        : ''}

    &:hover {
      background-color: ${(prop) =>
        prop.mode === 'true' ? '' : 'rgb(245, 245, 245)'};

      color: #e7746f;
    }
  }
`;

const Box = styled.div`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const Bar = styled(Box)<{ scroll: number; mode: string }>``;

const ModeChanger = styled(Box)``;

const Logo = styled.span`
  font-family: 'LilitaOne';
  font-size: 2rem;
`;
