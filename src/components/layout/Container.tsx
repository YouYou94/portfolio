import { ReactElement } from 'react';
import styled from 'styled-components';

type ContainerProps = {
  mode: boolean;
  direction: string;
  children: string | ReactElement | ReactElement[];
};

export const Container = ({ mode, direction, children }: ContainerProps) => {
  return (
    <Section direction={direction} mode={mode.toString()}>
      {children}
    </Section>
  );
};

const Section = styled.section<{ direction: string; mode: string }>`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: ${(prop) => prop.direction};

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(34, 40, 49)' : 'rgb(255, 255, 255)'};
  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(34, 40, 49)'};
`;
