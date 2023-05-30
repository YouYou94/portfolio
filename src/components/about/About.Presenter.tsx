import { CloseTag, OpenTag, VariableTag } from '../common/Span';
import {
  About,
  Br,
  TitleBox,
  Title,
  IntrduceBox,
  IntroduceSpan,
  TechBox,
} from './AboutStyled';

export const AboutUI = () => {
  return (
    <About id="2">
      <OpenTag tag="body" />
      <OpenTag tag="section" paddingLeft="2">
        <VariableTag variable="className" value='"About_Container"' />
      </OpenTag>
      <OpenTag tag="h1" paddingLeft="4" />
      <TitleBox>
        <Title>자기소개</Title>
      </TitleBox>
      <CloseTag tag="h1" paddingLeft="4" />
      <OpenTag tag="p" paddingLeft="4" />
      <IntrduceBox>
        <IntroduceSpan>
          작은 변화에도 빠르게 결과를 보여주는 매력에 빠진 프론트엔드 개발자
          유병현입니다.
        </IntroduceSpan>
        <IntroduceSpan>
          사용자에게 1초도 아깝지 않은 컨텐츠를 제공하는 것이 저의 목표입니다.
        </IntroduceSpan>
      </IntrduceBox>
      <CloseTag tag="p" paddingLeft="4" />

      <Br />

      <OpenTag tag="h1" paddingLeft="4" />
      <TitleBox>
        <Title>기술스택</Title>
      </TitleBox>
      <CloseTag tag="h1" paddingLeft="4" />
      <OpenTag tag="div" paddingLeft="4" />
      <TechBox></TechBox>
      <CloseTag tag="div" paddingLeft="4" />
      <CloseTag tag="section" paddingLeft="2" />
    </About>
  );
};
