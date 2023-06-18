import * as S from './IntroduceStyled';
import IntroduceImage from '../../assets/introduce.png';
import { Linked } from './linked/Link';
import { About } from './about/About';
import { Tech } from './tech/Tech';

export const Introduce = () => {
  return (
    <S.Layout>
      <S.IntroduceBox>
        <S.ProfileBox>
          <S.IntroduceImg
            src={IntroduceImage}
            alt="작가 storyset 출처 Freepik"
          />
          <S.Box>
            <S.H3>Link</S.H3>
            <Linked />
          </S.Box>
        </S.ProfileBox>
        <S.AboutBox>
          <S.H3>About</S.H3>
          <About />
        </S.AboutBox>
        <S.TechBox>
          <S.H3>Tech</S.H3>
          <Tech />
        </S.TechBox>
      </S.IntroduceBox>
    </S.Layout>
  );
};
