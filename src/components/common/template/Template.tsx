import { ReactElement } from 'react';
import { Layout } from './TemplateStyled';

type TemplateProps = {
  children?: string | ReactElement | ReactElement[];
  color?: string | undefined;
};

export const Template = ({ children, color }: TemplateProps) => {
  return <Layout color={color}>{children}</Layout>;
};
