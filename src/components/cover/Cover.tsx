import { useRecoilValue } from 'recoil';
import {
  Layout,
  TitleBox,
  Title,
  SubTitle,
  ClickBox,
  ClickSpan,
} from './CoverStyled';
import { getModeState } from '../../recoil/selector';
import { useNavigate } from 'react-router-dom';

export const Cover = () => {
  const navigate = useNavigate();
  const mode = useRecoilValue(getModeState);

  return (
    <Layout>
      <TitleBox>
        <Title>PORTFOLIO</Title>
        <SubTitle>YouYou94 | Frontend Developer</SubTitle>
      </TitleBox>
      <ClickBox mode={mode.toString()}>
        <ClickSpan onClick={() => navigate('/portfolio/about')}>
          NEXT {'>>'}
        </ClickSpan>
      </ClickBox>
    </Layout>
  );
};
