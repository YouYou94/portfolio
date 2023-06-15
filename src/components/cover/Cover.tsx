import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';
import CoverImage from '../../assets/cover.png';

export const Cover = () => {
  const mode = useRecoilValue(getMode);

  return (
    <Box>
      <CoverImg src={CoverImage} alt="작가 storyset 출처 Freepik" />
      <TitleBox>
        <Title>PORTFOLIO</Title>
        <SubTitle>YouYou94 | Frontend Developer</SubTitle>
      </TitleBox>
      <ScrollBox mode={mode.toString()}>
        <Scroll />
        <Scroll />
      </ScrollBox>
    </Box>
  );
};

const Box = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 6rem 0;
`;

const CoverImg = styled.img`
  width: 25rem;
`;

const TitleBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: 'Anton';
  font-size: 6rem;
`;

const SubTitle = styled.span`
  font-family: 'Alkatra';

  text-align: end;
`;

const ScrollBox = styled.div<{ mode: string }>`
  width: 2rem;
  height: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    border-left: 3px solid
      ${(prop) =>
        prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(34, 40, 49)'};
    border-bottom: 3px solid
      ${(prop) =>
        prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(34, 40, 49)'};

    transform: rotate(-45deg);
  }
`;

const ScrollDown = keyframes`
  0% {
    transform: translate(0) rotate(-45deg);
  }
  20% {
    transform: translateY(15px) rotate(-45deg);
  }
  40% {
    transform: translate(0) rotate(-45deg);
  }

`;

const Scroll = styled.div`
  width: 1rem;
  height: 1rem;

  animation: ${ScrollDown} 1.5s infinite;
`;
