import { CloseTag, OpenTag, VariableTag } from '../common/Span';
import { Contact } from './ContactStyled';

export const ContactUI = () => {
  return (
    <Contact id="4">
      <OpenTag tag="footer" paddingLeft="2">
        <VariableTag variable="className" value="Contact_Container" />
      </OpenTag>
      <CloseTag tag="footer" paddingLeft="2" />
      <CloseTag tag="body" />
      <CloseTag tag="html" />
    </Contact>
  );
};
