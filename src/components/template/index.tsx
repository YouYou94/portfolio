import styled from 'styled-components';
import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';

interface TemplateProps {
  children: string | ReactElement | ReactElement[];
}

export const Template = ({ children }: TemplateProps) => {
  const mode = useRecoilValue(getMode);

  return <Layout mode={mode.toString()}>{children}</Layout>;
};

const Layout = styled.main<{ mode: string }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(34, 40, 49)' : ''};

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(34, 40, 49)'};
`;
