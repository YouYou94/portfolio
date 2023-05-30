import { useLocation } from 'react-router-dom';
import { DetailUI } from './Detail.Presenter';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../recoil/selector';

export const Detail = () => {
  const location = useLocation();
  const mode = useRecoilValue(getModeState);

  return <DetailUI projectState={location?.state} modeState={mode} />;
};
