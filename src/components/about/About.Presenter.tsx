import { CloseTag, OpenTag, VariableTag } from '../common/Span';
import { About } from './AboutStyled';

export const AboutUI = () => {
  return (
    <About id="2">
      <OpenTag tag="body" />
      <OpenTag tag="section" paddingLeft="2">
        <VariableTag variable="className" value='"About_Container"' />
      </OpenTag>
      <CloseTag tag="section" paddingLeft="2" />
    </About>
  );
};
