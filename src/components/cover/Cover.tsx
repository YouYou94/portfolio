import styled from 'styled-components';
import CoverImage from '../../assets/cover.png';

export const Cover = () => {
  return (
    <Box>
      <CoverImg src={CoverImage} alt="작가 storyset 출처 Freepik" />
      <TitleBox>
        <Title>PORTFOLIO</Title>
        <SubTitle>YouYou94 | Frontend Developer</SubTitle>
      </TitleBox>
    </Box>
  );
};

const Box = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem 0;
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
