import { useState } from 'react';
import { Carousel, Template } from '../components';

const Experience = () => {
  const [isReadme, setIsReadme] = useState<boolean>(false);

  return (
    <Template>
      <Carousel state={isReadme} setState={setIsReadme} />
    </Template>
  );
};

export default Experience;
