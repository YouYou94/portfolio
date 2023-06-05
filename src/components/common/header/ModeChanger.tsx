import styled from 'styled-components';
import ModeIconUrl from '../../../assets/mode.png';
import React from 'react';

type Props = {
  state: boolean;
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

export const ModeChanger = ({ state, clickHandler }: Props) => {
  return (
    <Box>
      <Button
        mode={state.toString()}
        onClick={clickHandler}
        title="Dark Mode | 화면대비"
      >
        <Icon />
      </Button>
    </Box>
  );
};

const Box = styled.div`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ mode: string }>`
  width: 2.75rem;
  height: 2.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: none;

  background-color: rgb(238, 238, 238);

  transition: all 0.3s;

  ${(prop) => (prop.mode === 'true' ? 'transform: scaleX(-1) scaleY(-1)' : '')};

  cursor: pointer;

  &:hover {
    background-color: rgb(222, 222, 222);
  }
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  background-image: url(${ModeIconUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;
