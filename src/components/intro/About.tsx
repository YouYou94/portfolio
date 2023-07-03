import styled from 'styled-components';
import { PiHandWavingDuotone } from 'react-icons/pi';

export const About = () => {
  return (
    <Layout>
      <AboutBox>
        <IconBox>
          <PiHandWavingDuotone size={30} />
        </IconBox>
        <AboutText>
          <Strong>안녕하세요, 프론트엔드 개발자를 꿈 꾸는 유병현입니다.</Strong>
          {'\n'}
          {'\n'}
          작성 중인 코드가 즉각적으로 브라우저 화면에 적용되는 매력에 빠졌으며,
          새로운 것을 도전하고 배우는데 성취감을 느낍니다. 많은 경험과 새로운
          도전을 통해 사용자에게 단 1초도 아깝지 않은 컨텐츠를 제공하는
          프론트엔드 개발자로 성장하는 것이 저의 목표입니다. 계속해서 변화하는
          새로운 기술에 뒤처지지 않게 자기 개발을 꾸준히 하여 어제보다 오늘 더
          성장하는 <strong>프론트엔드 개발자</strong>가 되겠습니다.
        </AboutText>
      </AboutBox>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
`;

const AboutBox = styled.div`
  flex: 1;

  display: flex;

  gap: 1rem;
`;

const IconBox = styled.div``;

const AboutText = styled.span`
  font-family: 'GowunDodum';

  white-space: pre-wrap;

  @media screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Strong = styled.strong`
  font-size: 1.25rem;
`;
