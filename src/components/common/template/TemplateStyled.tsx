import styled from 'styled-components';

export const Layout = styled.section<{ color: string | undefined }>`
  width: 100%;
  height: 100vh;

  flex: 1;

  display: flex;
  flex-direction: column;

  padding-top: 3rem;

  background-color: ${(prop) => prop.color};
`;
