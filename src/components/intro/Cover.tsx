import styled from 'styled-components';
import CoverImage from '../../assets/cover.png';

export const Cover = () => {
  return (
    <Layout>
      <CoverImg src={CoverImage} alt="Intro Image" />
      <TitleBox>
        <Title>유병현 포트폴리오</Title>
        <SubTitle>YouYou94 | Frontend Developer</SubTitle>
      </TitleBox>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 2rem;

  gap: 1rem;
`;

const CoverImg = styled.img`
  width: 10rem;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: 'GowunDodum';
  font-size: 2rem;
  font-weight: bold;
`;

const SubTitle = styled.span`
  font-family: 'Alkatra';
  font-size: 0.75rem;

  padding-left: 0.25rem;
`;
