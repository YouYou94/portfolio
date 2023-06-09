import styled from 'styled-components';

type TemplateProps = {
  children: string;
};

export const Title = ({ children }: TemplateProps) => {
  return (
    <Box>
      <H2>{children}</H2>
    </Box>
  );
};

export const Box = styled.div`
  display: flex;
`;

export const H2 = styled.h1`
  font-family: 'Alkatra';
  font-size: 1.75rem;

  border-bottom: 3px solid rgb(66, 90, 115);
`;
