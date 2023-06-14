import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';
import { TechStack } from '../../constants/index';
import * as S from './IntroduceStyled';

export const Introduce = () => {
  const mode = useRecoilValue(getMode);

  return (
    <S.Layout>
      <S.Box>
        <S.Introduce>
          <S.H3>Introduce</S.H3>
          <S.Strong>
            안녕하세요,
            <br />
            프론트엔드 개발자를 꿈 꾸는 유병현입니다.
          </S.Strong>
          <S.Span>
            작성 중인 코드가 즉각적으로 브라우저 화면에 적용되는 매력에 빠져
            프론트엔드를 시작하게 되었습니다. 저는 사용자에게 단 1초도 아깝지
            않은 컨텐츠를 제공하는 프론트엔드 개발자가 되는 것이 목표입니다.
          </S.Span>

          <S.Span>
            꾸준함과 기록하는 습관으로 성장하고 있습니다. 프로젝트가 종료된
            이후에도 코드의 중복을 최소화하고 가독성 높이기 위해 리펙터링을
            시도하고 있습니다.
          </S.Span>

          <S.Span>
            어제보다 오늘 더 성장하는 개발자로 성장하여 회사에 이바지하는
            프론트엔드 개발자가 되겠습니다.
          </S.Span>

          <S.H3>Tech</S.H3>

          <S.Tech>
            {TechStack?.map((tech: string, index: number) => {
              return (
                <S.TechBedge key={index} mode={mode.toString()}>
                  # {tech}
                </S.TechBedge>
              );
            })}
          </S.Tech>
        </S.Introduce>
      </S.Box>
    </S.Layout>
  );
};
