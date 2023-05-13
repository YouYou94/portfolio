import { ReactElement } from 'react';
import { SingleLayout } from './TemplateStyled';

type TemplateProps = {
  children?: string | ReactElement | ReactElement[];
};

export const SingleTemplate = ({ children }: TemplateProps) => {
  return <SingleLayout>{children}</SingleLayout>;
};
