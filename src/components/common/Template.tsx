import styled from 'styled-components';
import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';

interface TemplateProps {
  isFull?: boolean | undefined;
  children: string | ReactElement | ReactElement[];
}

export const Template = ({ isFull, children }: TemplateProps) => {
  const mode = useRecoilValue(getMode);

  return (
    <Layout full={isFull?.toString() || 'false'} mode={mode.toString()}>
      {children}
    </Layout>
  );
};

const Layout = styled.main<{ full: string; mode: string }>`
  height: ${(prop) => (prop.full === 'true' ? '100vh' : '100%')};

  display: flex;
  flex-direction: column;

  padding-top: 8rem;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(34, 40, 49)' : ''};

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(34, 40, 49)'};
`;
