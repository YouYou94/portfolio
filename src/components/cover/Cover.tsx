import {
  Box,
  HtmlTag,
  HeadTag,
  MetaTag,
  TitleTag,
  BodyTag,
  MainTag,
  HeaderTag,
  H1Tag,
  SectionTag,
  FooterTag,
  Scroll,
  TagLabel,
  Label,
  H1Label,
} from './CoverStyled';

export const Cover = () => {
  return (
    <Box>
      <HtmlTag>
        <TagLabel>{'<!DOCTYPE html>'}</TagLabel>
        <TagLabel>{'<html>'}</TagLabel>
        <HeadTag>
          <TagLabel>{'<head>'}</TagLabel>
          <MetaTag>
            <TagLabel>{'<meta charset="UTF-8">'}</TagLabel>
            <TagLabel>
              {
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
              }
            </TagLabel>
          </MetaTag>
          <TitleTag>
            <TagLabel>{'<title>'}</TagLabel>
            <Label>YouYou94 Portfolio</Label>
            <TagLabel>{'</title>'}</TagLabel>
          </TitleTag>
          <TagLabel>{'</head>'}</TagLabel>
        </HeadTag>
        <BodyTag>
          <TagLabel>{'<body>'}</TagLabel>
          <MainTag>
            <TagLabel>{'<main>'}</TagLabel>
            <HeaderTag>
              <TagLabel>{'<header class="header">'}</TagLabel>
              <H1Tag>
                <TagLabel>{'<h1 class="header_title">'}</TagLabel>
                <H1Label>포트폴리오</H1Label>
                <TagLabel>{'</h1>'}</TagLabel>
              </H1Tag>
              <TagLabel>{'</header>'}</TagLabel>
            </HeaderTag>
            <SectionTag>
              <TagLabel>{'<section class="section">'}</TagLabel>
              <Label>S c r o l l</Label>
              <TagLabel>{'</section>'}</TagLabel>
            </SectionTag>
            <FooterTag>
              <TagLabel>{'<footer>'}</TagLabel>
              <Scroll />
              <TagLabel>{'</footer>'}</TagLabel>
            </FooterTag>
            <TagLabel>{'</main>'}</TagLabel>
          </MainTag>
          <TagLabel>{'</body>'}</TagLabel>
        </BodyTag>
        <TagLabel>{'</html>'}</TagLabel>
      </HtmlTag>
    </Box>
  );
};
