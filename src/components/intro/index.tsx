import styled from 'styled-components';
import { Cover } from './Cover';
import { About } from './About';
import { Link } from './Link';
import { Tech } from './Tech';

export const Intro = () => {
  return (
    <Layout id="intro">
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

  padding: 10rem 2rem 8rem;

  gap: 3rem;

  @media screen and (max-width: 1024px) {
    width: 36rem;

    padding: 10rem 1rem 8rem;
  }
`;
