import { useRecoilValue } from 'recoil';
import { ProjectList } from '../../Constants';
import { getModeState } from '../../recoil/selector';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Layout,
  Title,
  Container,
  StepBox,
  Step,
  CarouselBox,
  SlideBox,
  ProjectBox,
  UserImg,
  ProjectTitleBox,
  ProjectTitle,
  ProjectSubTitle,
  AboutSpan,
  RoleSpan,
  TechSpan,
  LinkBox,
  LinkAnchor,
  ButtonBox,
  Button,
} from './CarouselStyled';

export const Carousel = () => {
  const navigate = useNavigate();
  const mode = useRecoilValue(getModeState);
  const [now, setNow] = useState<number>(0);

  const handleClickLeftStep = () => {
    if (now === 0) setNow(ProjectList.length - 1);
    else setNow(now - 1);
  };

  const handleClickRightStep = () => {
    if (now === ProjectList.length - 1) setNow(0);
    else setNow(now + 1);
  };

  return (
    <Layout>
      <Title>PROJECT</Title>
      <Container>
        <StepBox>
          <Step
            rotate={45}
            mode={mode.toString()}
            onClick={handleClickLeftStep}
          />
        </StepBox>
        <CarouselBox>
          <SlideBox length={ProjectList?.length} now={now}>
            {ProjectList?.map((project: any, index: number) => {
              const { id, ui, title, subtitle, role, about, techstack, link } =
                project;

              return (
                <ProjectBox key={id}>
                  <UserImg mode={mode.toString()} imageurl={ui} />
                  <ProjectTitleBox>
                    <ProjectTitle>{title}:</ProjectTitle>
                    <ProjectSubTitle>{subtitle}</ProjectSubTitle>
                  </ProjectTitleBox>
                  <RoleSpan>{role}</RoleSpan>
                  <AboutSpan>{about}</AboutSpan>
                  <TechSpan>{techstack}</TechSpan>
                  <LinkBox mode={mode.toString()}>
                    <LinkAnchor href={link.github} target="_blank">
                      Github
                    </LinkAnchor>
                    <LinkAnchor href={link.demo} target="_blank">
                      Visite Site
                    </LinkAnchor>
                    {id === 0 ? (
                      <></>
                    ) : (
                      <LinkAnchor
                        onClick={() => navigate(`/portfolio/project/${id}`)}
                      >
                        ReadMe
                      </LinkAnchor>
                    )}
                  </LinkBox>
                </ProjectBox>
              );
            })}
          </SlideBox>
          <ButtonBox>
            {ProjectList?.map((project: any, index: number) => {
              return (
                <Button
                  key={index}
                  mode={mode.toString()}
                  ischeck={(index === now).toString()}
                  onClick={() => setNow(index)}
                ></Button>
              );
            })}
          </ButtonBox>
        </CarouselBox>
        <StepBox>
          <Step
            rotate={-135}
            mode={mode.toString()}
            onClick={handleClickRightStep}
          />
        </StepBox>
      </Container>
    </Layout>
  );
};
