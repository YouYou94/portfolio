import styled from 'styled-components';
import { BsCodeSlash } from 'react-icons/bs';

export const Logo = () => {
  return (
    <TitleBox>
      <BsCodeSlash />
      <Title>YouYou94</Title>
      <SubTitle>Frontend Developer</SubTitle>
    </TitleBox>
  );
};

const TitleBox = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  gap: 0.75rem;
`;

const Title = styled.h2`
  font-family: 'Anton';

  cursor: pointer;
`;

const SubTitle = styled.span`
  font-family: 'Alkatra';
  font-size: 0.75rem;

  user-select: none;
`;
