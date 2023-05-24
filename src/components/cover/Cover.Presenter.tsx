import { CloseTag, OneLineTag, OpenTag, VariableTag } from '../common/Span';
import {
  Cover,
  Br,
  TitleBox,
  Span,
  Title,
  SubTitle,
  ScrollBox,
  Mouse,
  Scroller,
} from './CoverStyled';

export const CoverUI = () => {
  return (
    <Cover id="1">
      <OpenTag tag="DOCTYPE" symbol="!">
        <VariableTag variable="html" />
      </OpenTag>
      <OpenTag tag="html" />
      <OpenTag tag="head" paddingLeft="3" />
      <OpenTag tag="meta" paddingLeft="6">
        <VariableTag variable="charset" value='"UTF-8"' />
      </OpenTag>

      <Br />

      <OpenTag tag="link" paddingLeft="6">
        <VariableTag variable="rel" value='"stylesheet"' />
        <VariableTag variable="href" value='"css/portfolio.css"' />
      </OpenTag>
      <OneLineTag tag="script" paddingLeft="6">
        <VariableTag variable="src" value='"ts/portfolio.ts"' />
        <VariableTag variable="defer" />
      </OneLineTag>

      <Br />

      <OpenTag tag="title" paddingLeft="6" />
      <TitleBox>
        <Title>PORTFOLIO</Title>
        <SubTitle>YouYou94 | Frontend Developer</SubTitle>
        <ScrollBox>
          <Span>SCROLL DOWN</Span>
          <Mouse>
            <Scroller />
          </Mouse>
        </ScrollBox>
      </TitleBox>
      <CloseTag tag="title" paddingLeft="6" />
      <CloseTag tag="head" paddingLeft="3" />
    </Cover>
  );
};
