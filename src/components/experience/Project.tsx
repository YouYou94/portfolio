import React from 'react';
import * as S from './ProjectStyled';

interface LinkType {
  github: string;
  demo: string;
}

type ProjectProps = {
  mode: boolean;
  ui: string;
  title: string;
  subtitle: string;
  about: string;
  techstack: string;
  link: LinkType;
};

export const Project = ({
  mode,
  ui,
  title,
  subtitle,
  about,
  techstack,
  link,
}: ProjectProps) => {
  return (
    <S.Box>
      <S.UI mode={mode.toString()}>
        <S.UIimg src={ui} alt={subtitle} />
      </S.UI>
      <S.ProjectBox>
        <S.ContentBox>
          <S.Title>
            {title}: <S.Span>{subtitle}</S.Span>
          </S.Title>
          <S.Span>{about}</S.Span>
          <S.Span>
            <strong>사용기술</strong> : {techstack}
          </S.Span>
        </S.ContentBox>
        <S.LinkBox mode={mode.toString()}>
          <S.Button>
            <S.Link href={link.github} target="_blank">
              깃허브
            </S.Link>
          </S.Button>
          <S.Button>
            <S.Link href={link.demo} target="_blank">
              사이트
            </S.Link>
          </S.Button>
        </S.LinkBox>
      </S.ProjectBox>
    </S.Box>
  );
};
