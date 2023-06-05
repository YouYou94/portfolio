import { keyframes, styled } from 'styled-components';

type Props = {
  state: boolean;
};

export const Mouse = ({ state }: Props) => {
  return (
    <Box mode={state.toString()}>
      <MouseBox>
        <Scroll />
      </MouseBox>
    </Box>
  );
};

const Box = styled.div<{ mode: string }>`
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    border: 2px solid
      ${(prop) =>
        prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(34, 40, 49)'};
  }
`;

const Move = keyframes`
    10% {
        transform: translateY(.1rem);
    }
    75% {
        transform: translateY(.5rem);
        opacity: 0;
    }
  `;

export const MouseBox = styled.div`
  width: 2rem;
  height: 3rem;

  display: flex;
  justify-content: center;

  border-radius: 2rem;
  padding-top: 0.25rem;
`;

export const Scroll = styled.div`
  height: 0.5rem;

  animation: ${Move} 3s ease-out infinite;
`;
