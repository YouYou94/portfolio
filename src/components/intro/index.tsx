import styled from 'styled-components';
import { Cover } from './Cover';
import { About } from './About';
import { Link } from './Link';
import { Tech } from './Tech';

export const Intro = () => {
  return (
    <Layout>
      <Cover />
      <About />
      <Link />
      <Tech />
    </Layout>
  );
};

const Layout = styled.section`
  width: 48rem;

  display: flex;
  flex-direction: column;

  padding-top: 10rem;
  padding-bottom: 8rem;

  gap: 3rem;
`;
