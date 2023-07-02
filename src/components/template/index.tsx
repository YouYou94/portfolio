import styled from 'styled-components';
import { ReactElement, useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';
import { BiArrowToTop } from 'react-icons/bi';

interface TemplateProps {
  children: string | ReactElement | ReactElement[];
}

export const Template = ({ children }: TemplateProps) => {
  const mode = useRecoilValue(getMode);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

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
    <Layout mode={mode.toString()}>
      {children}
      <TopBtnBox scroll={scrollPercent} onClick={handleClickUp}>
        <BiArrowToTop size={32} />
      </TopBtnBox>
    </Layout>
  );
};

const Layout = styled.main<{ mode: string }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(34, 40, 49)' : ''};

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(34, 40, 49)'};
`;

const TopBtnBox = styled.div<{ scroll: number }>`
  position: fixed;

  right: 1rem;
  bottom: 1rem;

  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: rgb(204, 204, 204, 0.3);

  cursor: pointer;

  ${(prop) => (prop.scroll > 100 ? '' : 'display: none')};
`;
