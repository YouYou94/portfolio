import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { styled, keyframes } from 'styled-components';
import { getModeState } from '../../recoil/selector';

type TemplateProps = {
  children: string | ReactElement | ReactElement[];
};

export const Template = ({ children }: TemplateProps) => {
  const mode = useRecoilValue(getModeState);

  return <Layout mode={mode.toString()}>{children}</Layout>;
};

const Open = keyframes`
  10% {
    transform: scale(1, 0.002);
    background-color: #222831;
  } 
  35% {
    transform: scale(0.2, 0.002);
    background-color: #222831;
		opacity: 1;
  }
	50% {
    transform: scale(0.2, 0.002);
    background-color: #222831;
		opacity: 0;
  }
	85% {
    transform: scale(1, 0.002);
    background-color: #222831;
		opacity: 1;
  }
	100% {
    transform: scale(1, 1);
  }
`;

const Layout = styled.main<{ mode: string }>`
  flex: 1;

  display: flex;
  flex-direction: column;

  background-color: ${(prop) =>
    prop.mode === 'true' ? '#222831' : 'rgb(255, 255, 255)'};
  color: ${(prop) => (prop.mode === 'true' ? '#eeeeee' : '#222831')};

  animation: ${Open} 3s ease;
`;
