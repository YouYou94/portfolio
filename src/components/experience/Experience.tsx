import * as S from './ExperienceStyled';
import { Project } from './Project';

export const Experience = () => {
  return (
    <S.Layout>
      <S.TitleBox>
        <S.Title>Project Experience</S.Title>
      </S.TitleBox>
      <S.ProjectBox>
        <Project />
      </S.ProjectBox>
    </S.Layout>
  );
};
