import { TagSpan } from '../common/Span';
import {
  Section,
  CoverBox,
  TitleBox,
  Title,
  HeaderBox,
  HeaderTitle,
} from './CoverStyled';

export const CoverUI = () => {
  return (
    <Section id="1">
      <CoverBox>
        <TagSpan tag="!DOCTYPE" variable="html" isOpen={true} />
        <TagSpan tag="html" isOpen={true} />
        <TagSpan tag="head" isOpen={true} />
        <TagSpan
          tag="meta"
          variable="charset"
          value="UTF-8"
          isOpen={true}
          paddingLeft="3rem"
        />
        <TagSpan tag="title" isOpen={true} paddingLeft="3rem" />
        <TitleBox>
          <Title>포트폴리오</Title>
        </TitleBox>
        <TagSpan tag="title" isOpen={false} paddingLeft="3rem" />
        <TagSpan tag="head" isOpen={false} />
        <TagSpan tag="body" isOpen={true} />
        <TagSpan tag="header" isOpen={true} paddingLeft="3rem" />
        <HeaderBox>
          <TagSpan tag="span" isOpen={true} paddingLeft="7rem" />
          <HeaderTitle>YouYou94 | Frontend Developer</HeaderTitle>
          <TagSpan tag="span" isOpen={true} />
        </HeaderBox>
        <TagSpan tag="header" isOpen={false} paddingLeft="3rem" />
        <TagSpan tag="main" isOpen={true} paddingLeft="3rem" />
      </CoverBox>
    </Section>
  );
};
