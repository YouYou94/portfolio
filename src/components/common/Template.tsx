import { ReactElement } from 'react';
import { styled } from 'styled-components';

type TemplateProps = {
  children: string | ReactElement | ReactElement[];
};

export const Template = ({ children }: TemplateProps) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: #222831;
  color: #eeeeee;
`;
