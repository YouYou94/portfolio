import { useRecoilValue } from 'recoil';
import { CoverUI } from './Cover.Presenter';
import { getModeState } from '../../recoil/selector';

export const Cover = () => {
  const mode = useRecoilValue(getModeState);

  return <CoverUI modeState={mode} />;
};
