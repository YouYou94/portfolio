import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { getModeState } from '../../recoil/selector';

type TemplateProps = {
  children: string | ReactElement | ReactElement[];
};

export const Template = ({ children }: TemplateProps) => {
  const mode = useRecoilValue(getModeState);

  return <Layout mode={mode.toString()}>{children}</Layout>;
};

const Layout = styled.main<{ mode: string }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : '#222831'};
  color: ${(prop) => (prop.mode === 'true' ? '#222831' : '#eeeeee')};
`;
