import { styled } from 'styled-components';
import { CommonHeader, Cover, Introduce, Contact } from '../components';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getMode } from '../recoil';

// 스크롤 시 한 영역 씩 스크롤 다운
// 헤더는 공통으로하고 fixed
// -> 이렇게 되면 자연스레 Header는 공통 컴포넌트로 빠지고
// Nav 없애기
// -> Nav 없애는 대신 맨 위에 추가하고 스크롤 시 옆에 하나 추가

const Main = () => {
  const mode = useRecoilValue(getMode);

  return (
    <Layout mode={mode.toString()}>
      {/* 헤더 */}
      <CommonHeader />
      {/* 커버 */}
      <Cover />
      {/* 메뉴 */}
      <Introduce />
      <></>
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
