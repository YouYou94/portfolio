import styled from 'styled-components';
import a from '../../assets/project/portfolio.png';

export const Project = () => {
  return (
    <Box>
      <UI uiurl={a} />
    </Box>
  );
};

const Box = styled.article`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const UI = styled.div<{ uiurl: string }>`
  aspect-ratio: 4 / 3;

  background-image: url(${(prop) => prop.uiurl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
