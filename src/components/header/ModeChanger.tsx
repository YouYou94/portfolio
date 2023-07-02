import styled, { keyframes } from 'styled-components';
import { CiSun, CiDark } from 'react-icons/ci';
import { useRecoilState } from 'recoil';
import { mode } from '../../recoil';

export const ModeChanger = () => {
  const [isMode, setIsMode] = useRecoilState<boolean>(mode);

  const handleClickMode = () => setIsMode(!isMode);

  return (
    <Layout onClick={handleClickMode}>
      {isMode ? <CiDark size={28} /> : <CiSun size={28} />}
    </Layout>
  );
};

const FadeIn = keyframes`
  0% {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

const Layout = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  > svg {
    animation: ${FadeIn} 0.3s ease-in-out;
  }

  &:hover {
    background-color: rgb(204, 204, 204, 0.25);
  }
`;
