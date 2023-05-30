import {
  Detail,
  Line,
  Span,
  TitleBox,
  Title,
  LinkBox,
  Link,
  ContentBox,
  ContentTitle,
  StackBox,
  ListBox,
  Dot,
  TechBadge,
} from './DetailStyled';

type DetailProps = {
  projectState: any;
  modeState: boolean;
};

export const DetailUI = ({ projectState, modeState }: DetailProps) => {
  const {
    title,
    about,
    link,
    techstack,
    mainfunction,
    developmentcontent,
    troubleShooting,
  } = projectState;

  return (
    <Detail>
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>

      <Line />

      <Span>{about}</Span>
      <LinkBox>
        <Link mode={modeState.toString()} href={link.github} target="_blank">
          깃허브
        </Link>
        |
        <Link mode={modeState.toString()} href={link.demo} target="_blank">
          데모
        </Link>
      </LinkBox>

      <Line />

      <ContentBox>
        <TitleBox>
          <ContentTitle>사용 기술</ContentTitle>
        </TitleBox>
        <StackBox>
          {techstack?.map((tech: any, index: number) => {
            const { name, background } = tech;
            return (
              <TechBadge key={index} backgroundcolor={background}>
                {name}
              </TechBadge>
            );
          })}
        </StackBox>
      </ContentBox>

      <Line />

      <ContentBox>
        <TitleBox>
          <ContentTitle>주요 기능</ContentTitle>
        </TitleBox>
        {mainfunction?.map((func: any, index: number) => {
          return <Span key={index}>- {func}</Span>;
        })}
      </ContentBox>

      <Line />

      <ContentBox>
        <TitleBox>
          <ContentTitle>개발 내용</ContentTitle>
        </TitleBox>
        {developmentcontent?.map((content: any, index: number) => {
          return (
            <ListBox key={index}>
              <Dot />
              <Span>{content}</Span>
            </ListBox>
          );
        })}
      </ContentBox>

      <Line />

      {troubleShooting ? (
        <ContentBox>
          <TitleBox>
            <ContentTitle>이슈 해결</ContentTitle>
          </TitleBox>
          {troubleShooting?.map((trouble: any, index: number) => {
            return <Span key={index}>{trouble}</Span>;
          })}
        </ContentBox>
      ) : (
        <></>
      )}
    </Detail>
  );
};
