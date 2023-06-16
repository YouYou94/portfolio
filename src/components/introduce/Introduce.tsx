import * as S from './IntroduceStyled';
import IntroduceImage from '../../assets/introduce.png';
import { Linked } from './linked/Link';
import { About } from './about/About';
import { Tech } from './tech/Tech';

export const Introduce = () => {
  return (
    <S.Layout>
      <S.Picture>
        <S.IntroduceImg src={IntroduceImage} alt="작가 storyset 출처 Freepik" />
      </S.Picture>
      <S.Introduce>
        <S.Box>
          <S.H3>About</S.H3>
        </S.Box>
        <About />
        <S.Box>
          <S.H3>Link & Contact</S.H3>
        </S.Box>
        <Linked />
        <S.Box>
          <S.H3>Tech</S.H3>
        </S.Box>
        <Tech />
      </S.Introduce>
    </S.Layout>
  );
};
