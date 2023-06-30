import styled from 'styled-components';
import { PiFolderOpenDuotone } from 'react-icons/pi';
import { ProjectList } from '../../constants';
import { Project } from './Project';

export const Experience = () => {
  return (
    <Layout id="project">
      <TitleBox>
        <Title>
          <PiFolderOpenDuotone size={32} />
          프로젝트 경험
        </Title>
      </TitleBox>
      <Line />
      {ProjectList?.map((project: any, index: number) => {
        const { title, subtitle, role, ui, about, techstack, link } = project;
        return (
          <Project
            key={index}
            title={title}
            subtitle={subtitle}
            role={role}
            ui={ui}
            about={about}
            techstack={techstack}
            link={link}
          />
        );
      })}
    </Layout>
  );
};

const Layout = styled.section`
  width: 48rem;

  display: flex;
  flex-direction: column;

  padding: 0 2rem 5rem 2rem;

  gap: 0.5rem;
`;

const Line = styled.div`
  width: 100%;

  border-top: 1px solid rgb(204, 204, 204);
  padding-bottom: 2.5rem;
`;

const TitleBox = styled.div`
  display: flex;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;

  font-family: 'GowunDodum';
  font-size: 1.5rem;
  font-weight: bold;

  gap: 0.5rem;
`;
