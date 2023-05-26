import { useState } from 'react';
import { ExperienceUI } from './Experience.Presenter';

export const Experience = () => {
  const [now, setNow] = useState<number>(0);

  const handleClickCarouselButton = () => {};

  return <ExperienceUI carouselState={now} setCarouselState={setNow} />;
};
