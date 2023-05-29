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
  carouselState: number;
  setCarouselState: React.Dispatch<React.SetStateAction<number>>;
  clickHandler: React.MouseEventHandler<HTMLAnchorElement>;
};

export const ExperienceUI = ({
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
                <Project key={index}>
                  <ProjectUI iconurl={ui} />
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
                    <Link href={link.github} target="_blank">
                      깃허브
                    </Link>
                    |
                    <Link href={link.demo} target="_blank">
                      데모
                    </Link>
                    |
                    <Link id={id} onClick={clickHandler} target="_blank">
                      README
                    </Link>
                  </LinkBox>
                </Project>
              );
            })}
          </SlideBox>
        </CarouselBox>
        <ButtonBox>
          <Button
            ischeck={(carouselState === 0).toString()}
            onClick={() => setCarouselState(0)}
          ></Button>
          <Button
            ischeck={(carouselState === 1).toString()}
            onClick={() => setCarouselState(1)}
          ></Button>
          <Button
            ischeck={(carouselState === 2).toString()}
            onClick={() => setCarouselState(2)}
          ></Button>
          <Button
            ischeck={(carouselState === 3).toString()}
            onClick={() => setCarouselState(3)}
          ></Button>
        </ButtonBox>
      </ProjectBox>
      <CloseTag tag="div" paddingLeft="4" />
      <CloseTag tag="section" paddingLeft="2" />
    </Experience>
  );
};
