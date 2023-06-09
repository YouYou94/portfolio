import { useRecoilState } from 'recoil';
import { toggle, mode } from '../../recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faB,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import * as S from './HeaderStyled';
import { Link } from 'react-scroll';

export const Header = () => {
  const [isToggle, setIsToggle] = useRecoilState(toggle);
  const [isMode, setIsMode] = useRecoilState(mode);

  return (
    <S.Layout mode={isMode.toString()}>
      <S.Top>
        <S.Hamberger
          mode={isMode.toString()}
          toggle={isToggle.toString()}
          onClick={() => setIsToggle(!isToggle)}
          title="메뉴"
        >
          <S.Bar />
          <S.Bar />
          <S.Bar />
        </S.Hamberger>
        <S.ModeChanger
          mode={isMode.toString()}
          onClick={() => setIsMode(!isMode)}
          title="화면대비(다크모드)"
        >
          {isMode ? (
            <FontAwesomeIcon icon={faSun} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faMoon} size="2x" />
          )}
        </S.ModeChanger>
      </S.Top>
      <S.Bottom>
        <S.TitleBox>
          <S.Title title="감사합니다. 유병현 포트폴리오입니다.">
            Portfolio
          </S.Title>
        </S.TitleBox>
        <S.ContactBox mode={isMode.toString()}>
          <S.Contact title="블로그 링크">
            <S.Link href="https://velog.io/@ybh4115" target="_blank">
              <FontAwesomeIcon icon={faB} size="lg" />
            </S.Link>
          </S.Contact>
          <S.Contact title="깃허브 링크">
            <S.Link href="https://github.com/YouYou94" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </S.Link>
          </S.Contact>
          <S.Contact title="메일 보내기">
            <Link to="contact" spy={true} smooth={true}>
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </Link>
          </S.Contact>
          <S.Contact title="링크드인">
            <Link to="contact" spy={true} smooth={true}>
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </Link>
          </S.Contact>
        </S.ContactBox>
      </S.Bottom>
    </S.Layout>
  );
};
