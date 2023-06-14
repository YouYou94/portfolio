import { styled } from 'styled-components';
import { CommonHeader, Cover, Nav, Introduce, Contact } from '../components';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getMode } from '../recoil';

const Main = () => {
  const mode = useRecoilValue(getMode);
  const [page, setPage] = useState<number>(0);

  return (
    <Layout mode={mode.toString()}>
      {/* 헤더 */}
      <CommonHeader />
      {/* 커버 */}
      <Cover />
      {/* 메뉴 */}
      <Nav state={page} setState={setPage} />
      {page === 0 ? <Introduce /> : <></>}
      {page === 1 ? <></> : <></>}
      {page === 2 ? <Contact /> : <></>}
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
