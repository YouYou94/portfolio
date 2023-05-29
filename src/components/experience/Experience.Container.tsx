import { useState } from 'react';
import { ExperienceUI } from './Experience.Presenter';
import { useNavigate } from 'react-router-dom';

export const Experience = () => {
  const navigate = useNavigate();
  const [now, setNow] = useState<number>(0);

  const handleClickReadMe = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const { id } = event.currentTarget;

    navigate(`/portfolio/project/${id}`);
  };

  return (
    <ExperienceUI
      carouselState={now}
      setCarouselState={setNow}
      clickHandler={handleClickReadMe}
    />
  );
};
