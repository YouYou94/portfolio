import { CloseTag, OneLineTag, OpenTag, VariableTag } from '../common/Span';
import {
  Section,
  CoverBox,
  Box,
  Title,
  HeaderBox,
  HeaderTitle,
  NavBox,
  ScrollBox,
  ScrollIcon,
} from './CoverStyled';

export const CoverUI = () => {
  return (
    <Section id="1">
      <CoverBox>
        <OpenTag tag="DOCTYPE" symbol="!">
          <VariableTag variable="html" />
        </OpenTag>
        <OpenTag tag="html" />
        <OpenTag tag="head" />
        <OpenTag tag="meta" paddingLeft="3rem">
          <VariableTag variable="charset" value='"UTF-8"' />
        </OpenTag>
        <OpenTag tag="meta" paddingLeft="3rem">
          <VariableTag variable="name" value='"viewport"' />
          <VariableTag
            variable="content"
            value='"width=device-width, initial-scale=1.0"'
          />
        </OpenTag>

        <br />

        <OpenTag tag="link" paddingLeft="3rem">
          <VariableTag variable="rel" value='"stylesheet"' />
          <VariableTag variable="href" value='"css/portfolio.css"' />
        </OpenTag>
        <OneLineTag tag="script" paddingLeft="3rem">
          <VariableTag variable="src" value='"ts/portfolio.ts"' />
          <VariableTag variable="defer" />
        </OneLineTag>

        <Box>
          <OpenTag tag="title" />
          <Title>포트폴리오</Title>
          <CloseTag tag="title" />
        </Box>

        <CloseTag tag="head" />

        <OpenTag tag="body" />
        <OpenTag tag="header" paddingLeft="3rem">
          <VariableTag variable="className" value='"Portfolio_Header"' />
        </OpenTag>

        <HeaderBox>
          <OpenTag tag="span" />
          <HeaderTitle>YouYou94 | Frontend Developer</HeaderTitle>
          <CloseTag tag="span" />
        </HeaderBox>
        <CloseTag tag="header" paddingLeft="3rem" />

        <OpenTag tag="nav" paddingLeft="3rem">
          <VariableTag variable="className" value='"Portfolio_Nav"' />
        </OpenTag>
        <OpenTag tag="div" paddingLeft="6rem">
          <VariableTag variable="className" value='"Portfolio_Nav_Scroll"' />
        </OpenTag>
        <NavBox>
          <OpenTag tag="img">
            <VariableTag variable="className" value='"SCROLL DOWN"' />
          </OpenTag>
          <ScrollBox>
            <ScrollIcon />
          </ScrollBox>
          <CloseTag tag="img" />
        </NavBox>

        <CloseTag tag="div" paddingLeft="6rem" />
        <CloseTag tag="nav" paddingLeft="3rem" />
      </CoverBox>
    </Section>
  );
};
