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

type CoverProps = {
  modeState: boolean;
};

export const CoverUI = ({ modeState }: CoverProps) => {
  return (
    <Cover id="1">
      <OpenTag tag="DOCTYPE" symbol="!">
        <VariableTag variable="html" />
      </OpenTag>
      <OpenTag tag="html" />
      <OpenTag tag="head" />
      <OpenTag tag="meta" paddingLeft="2">
        <VariableTag variable="charset" value='"UTF-8"' />
      </OpenTag>

      <Br />

      <OpenTag tag="link" paddingLeft="2">
        <VariableTag variable="rel" value='"stylesheet"' />
        <VariableTag variable="href" value='"css/portfolio.css"' />
      </OpenTag>
      <OneLineTag tag="script" paddingLeft="2">
        <VariableTag variable="src" value='"ts/portfolio.ts"' />
        <VariableTag variable="defer" />
      </OneLineTag>

      <Br />

      <OpenTag tag="title" paddingLeft="2" />
      <TitleBox>
        <Title>PORTFOLIO</Title>
        <SubTitle>YouYou94 | Frontend Developer</SubTitle>
        <ScrollBox>
          <Span>SCROLL DOWN</Span>
          <Mouse mode={modeState.toString()}>
            <Scroller mode={modeState.toString()} />
          </Mouse>
        </ScrollBox>
      </TitleBox>
      <CloseTag tag="title" paddingLeft="2" />
      <CloseTag tag="head" />
    </Cover>
  );
};
