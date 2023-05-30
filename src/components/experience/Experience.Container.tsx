import { useState } from 'react';
import { ExperienceUI } from './Experience.Presenter';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../recoil/selector';

export const Experience = () => {
  const navigate = useNavigate();
  const mode = useRecoilValue(getModeState);
  const [now, setNow] = useState<number>(0);

  const handleClickReadMe = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const { id } = event.currentTarget;

    navigate(`/portfolio/project/${id}`);
  };

  return (
    <ExperienceUI
      modeState={mode}
      carouselState={now}
      setCarouselState={setNow}
      clickHandler={handleClickReadMe}
    />
  );
};
