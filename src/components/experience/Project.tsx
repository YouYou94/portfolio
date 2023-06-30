import styled from 'styled-components';
import {
  PiLightbulbDuotone,
  PiHammerDuotone,
  PiLinkDuotone,
} from 'react-icons/pi';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';

interface LinkType {
  github: string;
  demo: string;
}

interface ProjectProps {
  title: string;
  subtitle: string;
  role: string;
  ui: string;
  about: string;
  techstack: string;
  link: LinkType;
}

export const Project = ({
  title,
  subtitle,
  role,
  ui,
  about,
  techstack,
  link,
}: ProjectProps) => {
  const mode = useRecoilValue(getMode);

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
      <ButtonBox mode={mode.toString()}>
        <IconBox>
          <PiLinkDuotone size={22} />
        </IconBox>
        <Button>
          <Anchor href={link.github} target="_blank">
            깃허브
          </Anchor>
        </Button>
        <Button>
          <Anchor href={link.demo} target="_blank">
            사이트
          </Anchor>
        </Button>
      </ButtonBox>
    </Layout>
  );
};

const Layout = styled.article`
  display: flex;
  flex-direction: column;

  padding: 0 1.5rem 3rem 1.5rem;

  font-family: 'GowunDodum';

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

const ButtonBox = styled.div<{ mode: string }>`
  display: flex;
  align-items: center;

  gap: 1rem;

  > button {
    border: 1px solid
      ${(prop) =>
        prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(66, 90, 115)'};

    color: ${(prop) =>
      prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(34, 40, 49)'};
  }
`;

const Button = styled.button`
  width: 6rem;
  height: 1.75rem;

  border-radius: 0.25rem;

  background-color: transparent;

  font-family: 'GowunDodum';
`;

const Anchor = styled.a`
  &:visited {
    color: inherit;
  }
`;
