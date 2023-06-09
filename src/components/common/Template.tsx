import styled from 'styled-components';
import { ReactElement } from 'react';

type TemplateProps = {
  children: string | ReactElement | ReactElement[];
};

export const Template = ({ children }: TemplateProps) => {
  return <Section>{children}</Section>;
};

const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 5rem;
  padding: 2rem 0;

  border-bottom: 3px solid rgb(245, 245, 245);

  gap: 2rem;

  @media screen and (max-width: 1024px) {
    margin: 0 4rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0 2rem;
  }

  @media screen and (max-width: 480px) {
    margin: 0 1rem;
  }
`;
