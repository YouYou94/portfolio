import styled from 'styled-components';

export const Intro = () => {
  return (
    <Layout>
      <TitleBox>
        <Title>안녕하세요, 프론트엔드 개발자를 꿈 꾸는 유병현입니다.</Title>
        <Title>저의 포트폴리오에 방문해주셔서 감사합니다.</Title>
      </TitleBox>
      <AboutBox>
        <About>
          작성 중인 코드가 즉각적으로 브라우저 화면에 적용되는 매력에 빠졌으며,
          새로운 것을 도전하고 배우는 데 성취감을 느낍니다. 많은 경험과 새로운
          도전을 통해 사용자에게 단 1초도 아깝지 않은 컨텐츠를 제공하는
          프론트엔드 개발자로 성장하는 것이 저의 목표입니다. 계속해서 변화하는
          새로운 기술에 뒤처지지 않게 자기 개발을 꾸준히 하여 어제보다 오늘 더
          성장하는 <strong>프론트엔드 개발자</strong>가 되겠습니다.
        </About>
      </AboutBox>
    </Layout>
  );
};

const Layout = styled.header`
  height: 15rem;

  display: flex;
  flex-direction: column;

  padding: 0 4rem;

  gap: 1rem;

  font-family: 'malgun';
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutBox = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const About = styled.p``;
