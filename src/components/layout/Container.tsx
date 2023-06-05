import { ReactElement } from 'react';
import styled from 'styled-components';

type ContainerProps = {
  mode: boolean;
  direction: string;
  responsive?: number;
  responsivedirection?: string;
  children: string | ReactElement | ReactElement[];
};

export const Container = ({
  mode,
  direction,
  responsive,
  responsivedirection,
  children,
}: ContainerProps) => {
  return (
    <Section
      direction={direction}
      mode={mode.toString()}
      responsive={responsive}
      responsivedirection={responsivedirection}
    >
      {children}
    </Section>
  );
};

const Section = styled.section<{
  direction: string;
  mode: string;
  responsive?: number;
  responsivedirection?: string;
}>`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: ${(prop) => prop.direction};
  justify-content: center;
  align-items: center;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(34, 40, 49)' : 'rgb(255, 255, 255)'};
  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(34, 40, 49)'};

  @media screen and (max-width: ${(prop) => prop.responsive}px) {
    flex-direction: ${(prop) => prop.responsivedirection};
  }
`;
