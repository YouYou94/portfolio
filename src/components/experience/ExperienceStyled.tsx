import styled from 'styled-components';

export const Layout = styled.section`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;

  border-bottom: 3px solid rgb(245, 245, 245);
`;

export const TitleBox = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  font-family: 'Alkatra';

  border-bottom: 3px solid #f56a6a;
`;

export const ProjectBox = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
`;
