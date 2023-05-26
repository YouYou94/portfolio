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
  ButtonBox,
  Title,
  Btn,
} from './ExperienceStyled';
import React from 'react';

type ExperienceProps = {
  carouselState: number;
  setCarouselState: React.Dispatch<React.SetStateAction<number>>;
};

export const ExperienceUI = ({
  carouselState,
  setCarouselState,
}: ExperienceProps) => {
  return (
    <Experience id="3">
      <OpenTag tag="section" paddingLeft="6">
        <VariableTag variable="className" value='"Project_Container"' />
      </OpenTag>
      <OpenTag tag="h1" paddingLeft="9" />
      <TitleBox>
        <Fade duration={3000}>
          <Title>프로젝트 경험</Title>
        </Fade>
      </TitleBox>
      <CloseTag tag="h1" paddingLeft="9" />
      <OpenTag tag="div" paddingLeft="9">
        <VariableTag variable="className" value='"Project_Slide"' />
      </OpenTag>
      <ProjectBox>
        <CarouselBox>
          <SlideBox now={carouselState}>
            {ProjectList?.map((project: Object, index: number) => {
              return <Project key={index}></Project>;
            })}
          </SlideBox>
        </CarouselBox>
        <ButtonBox>
          <Btn
            isCheck={(carouselState === 0).toString()}
            onClick={() => setCarouselState(0)}
          ></Btn>
          <Btn
            isCheck={(carouselState === 1).toString()}
            onClick={() => setCarouselState(1)}
          ></Btn>
          <Btn
            isCheck={(carouselState === 2).toString()}
            onClick={() => setCarouselState(2)}
          ></Btn>
          <Btn
            isCheck={(carouselState === 3).toString()}
            onClick={() => setCarouselState(3)}
          ></Btn>
        </ButtonBox>
      </ProjectBox>
      <CloseTag tag="div" paddingLeft="9" />
      <CloseTag tag="section" paddingLeft="6" />
    </Experience>
  );
};
