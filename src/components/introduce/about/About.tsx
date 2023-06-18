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
          작성 중인 코드가 즉각적으로 브라우저 화면에 적용되는 매력에 빠졌으며,
          새로운 것을 도전하고 배우는데 성취감을 느낍니다. 많은 경험과 새로운
          도전을 통해 사용자에게 단 1초도 아깝지 않은 컨텐츠를 제공하는
          프론트엔드 개발자로 성장하는 것이 저의 목표입니다. 물음표에서 느낌표가
          되는 개발자로 성장하여 회사의 느낌표에 이바지하는 개발자가 되겠습니다.
        </Span>
        <Span></Span>
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
