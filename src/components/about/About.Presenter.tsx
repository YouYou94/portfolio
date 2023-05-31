import { CloseTag, OpenTag, VariableTag } from '../common/Span';
import {
  About,
  TitleBox,
  Title,
  IntrduceBox,
  TechBox,
  IntroduceTitle,
  IntroduceSubTitle,
  EmpasisSpan,
  IntroduceSpan,
  TechBadge,
} from './AboutStyled';

export const AboutUI = () => {
  return (
    <About id="2">
      <OpenTag tag="body" />
      <OpenTag tag="section" paddingLeft="2">
        <VariableTag variable="className" value='"About_Container"' />
      </OpenTag>
      <OpenTag tag="h1" paddingLeft="4" />
      <TitleBox>
        <Title>자기소개</Title>
      </TitleBox>
      <CloseTag tag="h1" paddingLeft="4" />
      <OpenTag tag="p" paddingLeft="4" />
      <IntrduceBox>
        <IntroduceTitle>
          " 프론트엔드 개발자를 꿈 꾸는 유병현입니다. "
        </IntroduceTitle>
        <IntroduceSpan>
          <EmpasisSpan>작은 변화에도 다른 결과</EmpasisSpan>를 보여주는 매력을
          가진 프론트엔드 개발이 즐겁습니다. <EmpasisSpan>꾸준함</EmpasisSpan>은
          저의 가장 강한 무기이며, 이를 바탕으로 역량을 키우고 있습니다. 저는
          사용자에게 <EmpasisSpan>1초도 아깝지 않은 컨텐츠를 제공</EmpasisSpan>{' '}
          하는 것이 목표입니다.
        </IntroduceSpan>
        <IntroduceSpan>
          저는 <EmpasisSpan>New를 두려워하지 않고</EmpasisSpan> 적응할 자신이
          있습니다. 스스로 많이 부족하다고 느끼고 있습니다. 모르는 것은 알기
          위해 <EmpasisSpan>물음표</EmpasisSpan>, 배운 것은 기억하기 위해{' '}
          <EmpasisSpan>느낌표</EmpasisSpan>의 자세를 가지겠습니다. 이런
          마음가짐으로 <EmpasisSpan>어제보다 오늘 더 성장하는</EmpasisSpan>{' '}
          개발자가 되기 위해 노력하는 유병현이 되겠습니다.
        </IntroduceSpan>
        <IntroduceSubTitle>기술스택</IntroduceSubTitle>
        <TechBox>
          <TechBadge
            backgroundcolor="#3178C6"
            title="Portfolio | Offline Memo App"
          >
            Typescript
          </TechBadge>
          <TechBadge backgroundcolor="#F7DF1E" title="Bujolog | Order App">
            Javascript
          </TechBadge>
          <TechBadge backgroundcolor="#E34F26">HTML</TechBadge>
          <TechBadge backgroundcolor="#1572B6">CSS</TechBadge>
        </TechBox>
        <TechBox>
          <TechBadge backgroundcolor="#61DAFB">React</TechBadge>
          <TechBadge backgroundcolor="#764ABC" title="Bujolog">
            Redux-Toolkit
          </TechBadge>
          <TechBadge
            backgroundcolor="#3578E5"
            title="Portfolio | Offline Memo App"
          >
            Recoil
          </TechBadge>
          <TechBadge backgroundcolor="#61DAFB" title="Order App">
            Context API
          </TechBadge>
        </TechBox>
        <TechBox>
          <TechBadge backgroundcolor="#FFCA28">Firebase</TechBadge>
          <TechBadge backgroundcolor="#DB7093">Styled-Components</TechBadge>
        </TechBox>
      </IntrduceBox>
      <CloseTag tag="p" paddingLeft="4" />
    </About>
  );
};
