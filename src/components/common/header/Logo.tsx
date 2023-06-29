import styled from 'styled-components';
import { BsCodeSlash } from 'react-icons/bs';

export const Logo = () => {
  return (
    <Layout>
      <BsCodeSlash />
      <Title>PORTFOLIO</Title>
      <SubTitle>Frontend Developer</SubTitle>
    </Layout>
  );
};

const Layout = styled.div`
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

  gap: 0.5rem;
`;

const Title = styled.h2`
  font-family: 'Anton';

  cursor: pointer;
`;

const SubTitle = styled.span`
  font-family: 'Alkatra';
  font-size: 0.75rem;
`;
