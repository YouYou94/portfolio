import { styled } from 'styled-components';
import {
  Cover,
  Introduce,
  Contact,
  Experience,
  CommonHeader,
} from '../components';
import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { getMode } from '../recoil';

const Main = () => {
  const mode = useRecoilValue(getMode);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      const deltaY = event.deltaY;
      const clientHeight = pageRef.current?.clientHeight || 0;
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      /* 스크롤 === 세로길이 */
      const scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop,
      );

      const handleScrollTo = (count: number) => {
        window.scrollTo({
          top: pageHeight * count,
          behavior: 'smooth',
        });
      };

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < clientHeight / 4) {
          handleScrollTo(1);
        } else if (
          scrollTop >= clientHeight / 4 &&
          scrollTop < (clientHeight / 4) * 2
        ) {
          handleScrollTo(2);
        } else if (
          scrollTop >= (clientHeight / 4) * 2 &&
          scrollTop < (clientHeight / 4) * 3
        ) {
          handleScrollTo(3);
        }
      } else if (deltaY < 0) {
        if (
          scrollTop >= clientHeight / 4 &&
          scrollTop < (clientHeight / 4) * 2
        ) {
          handleScrollTo(0);
        } else if (
          scrollTop >= (clientHeight / 4) * 2 &&
          scrollTop < (clientHeight / 4) * 3
        ) {
          handleScrollTo(1);
        } else if (
          scrollTop >= (clientHeight / 4) * 3 &&
          scrollTop < (clientHeight / 4) * 4
        ) {
          handleScrollTo(2);
        }
      }
    };

    /* 이벤트 추가 */
    pageRef.current?.addEventListener('wheel', handleScroll, {
      passive: false,
    });

    /* 이벤트 제거 */
    return () => {
      pageRef.current?.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <Layout ref={pageRef} mode={mode.toString()}>
      <CommonHeader />
      {/* 커버 */}
      <Cover />
      {/* 소개 */}
      <Introduce />
      {/* 프로젝트 */}
      <Experience />
      {/* 연락 */}
      <Contact />
    </Layout>
  );
};

export default Main;

const Layout = styled.main<{ mode: string }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(34, 40, 49)' : ''};

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(34, 40, 49)'};
`;
