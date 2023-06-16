import styled from 'styled-components';

export const About = () => {
  return (
    <>
      <AboutBox>
        <Strong>
          안녕하세요,
          <br />
          프론트엔드 개발자를 꿈 꾸는 유병현입니다.
        </Strong>
        <Span>
          작성 중인 코드가 즉각적으로 브라우저 화면에 적용되는 매력에 빠져
          프론트엔드를 시작하게 되었습니다. 사용자에게 단 1초도 아깝지 않은
          컨텐츠를 제공하는 프론트엔드 개발자가 되는 것이 저의 목표입니다.
        </Span>
        <Span>
          꾸준히 개발 공부를 통해 깃허브에 커밋하고, 트러블 슈팅이나 학습한
          내용을 블로그에 기록하고 있습니다. 또한, 프로젝트 종료 이후에도
          그것으로 끝이 아닌 코드의 중복을 최소화하고, 가독성 높이기 위해
          리펙터링을 시도하여 성장하고 있습니다.
        </Span>
        <Span>
          어제보다 오늘 더 성장하는 개발자로 성장하여 회사 성장에 이바지하는
          프론트엔드 개발자가 되겠습니다.
        </Span>
      </AboutBox>
    </>
  );
};

const AboutBox = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 1rem;

  gap: 0.75rem;
`;

const Strong = styled.strong``;

const Span = styled.span``;
