import { Section, Header, CoverH1 } from './CoverStyled';

type CoverProps = {
  title: string;
};

export const Cover = ({ title }: CoverProps) => {
  return (
    <Section>
      <CoverH1>{title}</CoverH1>
    </Section>
  );
};

export const HeaderCover = ({ title }: CoverProps) => {
  return (
    <Header>
      <CoverH1>{title}</CoverH1>
    </Header>
  );
};
