import {
  Layout,
  Title,
  IntrduceBox,
  IntroduceTitle,
  IntroduceSpan,
  EmpasisSpan,
} from './IntroduceStyled';

export const Introduce = () => {
  return (
    <Layout>
      <Title>ABOUT</Title>
      <IntrduceBox>
        <IntroduceTitle>
          " 프론트엔드 개발자를 꿈 꾸는 유병현입니다. "
        </IntroduceTitle>
        <IntroduceSpan>
          <EmpasisSpan>작은 변화에도 다른 결과</EmpasisSpan>를 보여주는 매력을
          가진 프론트엔드 개발이 즐겁습니다. {'\n'}
          <EmpasisSpan>꾸준함</EmpasisSpan>은 저의 가장 강한 무기이며, 이를
          바탕으로 역량을 키우고 있습니다. {'\n'}저는 사용자에게{' '}
          <EmpasisSpan>1초도 아깝지 않은 컨텐츠를 제공</EmpasisSpan> 하는 것이
          목표입니다.
        </IntroduceSpan>
        <IntroduceSpan>
          저는 <EmpasisSpan>새로운 것을 두려워하지 않고</EmpasisSpan> 적응할
          자신이 있습니다. 스스로 많이 부족하다고 느끼고 있습니다. {'\n'}모르는
          것은 알기 위해 <EmpasisSpan>물음표</EmpasisSpan>, 배운 것은 기억하기
          위해 <EmpasisSpan>느낌표</EmpasisSpan>의 자세를 가지겠습니다. {'\n'}
          이런 마음가짐으로 <EmpasisSpan>
            어제보다 오늘 더 성장하는
          </EmpasisSpan>{' '}
          개발자가 되기 위해 노력하는 유병현이 되겠습니다.
        </IntroduceSpan>
      </IntrduceBox>
    </Layout>
  );
};
