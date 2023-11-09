import { useParams } from 'react-router-dom';
import { ProjectList } from '../../constants';
import { PiLightbulbDuotone, PiHammerDuotone } from 'react-icons/pi';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';
import styled from 'styled-components';

export const Detail = () => {
  const param = useParams();

  const mode = useRecoilValue(getMode);

  const { ui, title, subtitle, role, about, link, techstack } =
    ProjectList[Number(param.id)];

  return (
    <Layout>
      <Header>
        <TitleBox>
          <Title>{title}:</Title>
          <SubTitle>{subtitle}</SubTitle>
        </TitleBox>
        <RoleBox>
          <Role>{role}</Role>
        </RoleBox>
      </Header>
      <UserInterface ui={ui} />
      <AboutBox>
        <IconBox>
          <PiLightbulbDuotone size={22} />
        </IconBox>
        <About>{about}</About>
      </AboutBox>
      <TechBox>
        <IconBox>
          <PiHammerDuotone size={22} />
        </IconBox>
        <Tech mode={mode.toString()}>{techstack}</Tech>
      </TechBox>
    </Layout>
  );
};

const Layout = styled.section`
  width: 768px;

  display: flex;
  flex-direction: column;

  padding: 10rem 2rem 8rem;

  gap: 1rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
`;

const SubTitle = styled.span``;

const RoleBox = styled.div``;

const Role = styled.span`
  border-radius: 0.25rem;
  padding: 0.125rem 0.25rem;

  font-size: 0.75rem;

  background-color: rgb(55, 118, 171, 0.5);
`;

const UserInterface = styled.div<{ ui: string }>`
  width: 100%;

  aspect-ratio: 2 / 1;

  border: 1px solid rgb(204, 204, 204);

  background-image: url(${(prop) => prop.ui});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const AboutBox = styled.div`
  display: flex;

  gap: 1rem;
`;

const TechBox = styled.div`
  display: flex;

  gap: 1rem;
`;

const IconBox = styled.div``;

const About = styled.p``;

const Tech = styled.span<{ mode: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 0.5rem;
  border-radius: 0.25rem;

  background-color: rgb(204, 204, 204, 0.5);
  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(55, 118, 171)'};

  font-size: 0.8rem;
  font-weight: bold;
`;
