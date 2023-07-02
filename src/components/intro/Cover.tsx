import styled from 'styled-components';
import CoverImage from '../../assets/cover.png';
import { BsCodeSlash } from 'react-icons/bs';

export const Cover = () => {
  return (
    <Layout>
      <CoverImg src={CoverImage} alt="Intro Image" />
      <TitleBox>
        <Title>
          <BsCodeSlash size={36} /> 유병현 포트폴리오
        </Title>
        <SubTitle>YouYou94 | Frontend Developer</SubTitle>
      </TitleBox>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;

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
  display: flex;
  align-items: center;

  font-family: 'GowunDodum';
  font-size: 2rem;
  font-weight: bold;

  gap: 0.5rem;
`;

const SubTitle = styled.span`
  font-family: 'Alkatra';
  font-size: 0.75rem;

  padding-left: 0.25rem;
`;
