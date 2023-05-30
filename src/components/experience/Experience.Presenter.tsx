import { Fade } from 'react-awesome-reveal';
import { ProjectList } from '../../Constants';
import { CloseTag, OpenTag, VariableTag } from '../common/Span';
import {
  Experience,
  TitleBox,
  ProjectBox,
  CarouselBox,
  SlideBox,
  Project,
  Line,
  Title,
  ProjectUI,
  ProjectTitle,
  TechBox,
  TechBadge,
  LinkBox,
  Link,
  ButtonBox,
  Button,
} from './ExperienceStyled';
import React from 'react';

type ExperienceProps = {
  modeState: boolean;
  carouselState: number;
  setCarouselState: React.Dispatch<React.SetStateAction<number>>;
  clickHandler: React.MouseEventHandler<HTMLAnchorElement>;
};

export const ExperienceUI = ({
  modeState,
  carouselState,
  setCarouselState,
  clickHandler,
}: ExperienceProps) => {
  return (
    <Experience id="3">
      <OpenTag tag="section" paddingLeft="2">
        <VariableTag variable="className" value='"Project_Container"' />
      </OpenTag>
      <OpenTag tag="h1" paddingLeft="4" />
      <TitleBox>
        <Fade duration={3000}>
          <Title>프로젝트 경험</Title>
        </Fade>
      </TitleBox>
      <CloseTag tag="h1" paddingLeft="4" />
      <OpenTag tag="div" paddingLeft="4">
        <VariableTag variable="className" value='"Project_Slide"' />
      </OpenTag>
      <ProjectBox>
        <CarouselBox>
          <SlideBox now={carouselState} length={ProjectList.length}>
            {ProjectList?.map((project: any, index: number) => {
              const { id, ui, title, link, techstack } = project;

              return (
                <Project key={index} mode={modeState.toString()}>
                  <ProjectUI iconurl={ui} mode={modeState.toString()} />
                  <ProjectTitle>{title}</ProjectTitle>
                  <Line />
                  <TechBox>
                    {techstack?.map((tech: any, index: number) => {
                      const { name, background } = tech;

                      return (
                        <TechBadge key={index} backgroundcolor={background}>
                          {name}
                        </TechBadge>
                      );
                    })}
                  </TechBox>
                  <Line />
                  <LinkBox>
                    <Link
                      mode={modeState.toString()}
                      href={link.github}
                      target="_blank"
                    >
                      깃허브
                    </Link>
                    |
                    <Link
                      mode={modeState.toString()}
                      href={link.demo}
                      target="_blank"
                    >
                      데모
                    </Link>
                    |
                    <Link
                      id={id}
                      mode={modeState.toString()}
                      onClick={clickHandler}
                    >
                      README
                    </Link>
                  </LinkBox>
                </Project>
              );
            })}
          </SlideBox>
        </CarouselBox>
        <ButtonBox>
          {ProjectList?.map((project: any, index: number) => {
            return (
              <Button
                key={index}
                mode={modeState.toString()}
                ischeck={(carouselState === index).toString()}
                onClick={() => setCarouselState(index)}
              ></Button>
            );
          })}
        </ButtonBox>
      </ProjectBox>
      <CloseTag tag="div" paddingLeft="4" />
      <CloseTag tag="section" paddingLeft="2" />
    </Experience>
  );
};
