import { Dispatch, SetStateAction } from 'react';
import { Layout } from './ReadmeStyled';

type ReadmeProps = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

export const Readme = ({ state, setState }: ReadmeProps) => {
  return <Layout></Layout>;
};
