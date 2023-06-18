import styled from 'styled-components';
import { ProjectList } from '../../constants/index';
import { Project } from './Project';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';

export const Experience = () => {
  const mode = useRecoilValue(getMode);

  return (
    <Layout>
      <ProjectBox>
        {ProjectList?.map((project: any, index: number) => {
          const { ui, title, subtitle, about, techstack, link } = project;
          return (
            <Project
              key={index}
              mode={mode}
              ui={ui}
              title={title}
              subtitle={subtitle}
              about={about}
              techstack={techstack}
              link={link}
            />
          );
        })}
      </ProjectBox>
    </Layout>
  );
};

const Layout = styled.section`
  height: 100vh;

  padding: 2rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectBox = styled.div`
  width: 48rem;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 30rem;
  }
`;
