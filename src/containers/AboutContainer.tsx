import { AboutList } from '../Constants';
import { About, Template } from '../components';

const AboutContainer = () => {
  return (
    <Template>
      <About textList={AboutList} />
    </Template>
  );
};

export default AboutContainer;
