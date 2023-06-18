import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../../recoil';

export const Linked = () => {
  const mode = useRecoilValue(getMode);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };

  return (
    <>
      <LinkBox mode={mode.toString()}>
        <LinkIconBox title="블로그 바로가기">
          <Link href="https://velog.io/@ybh4115" target="_blank">
            <FontAwesomeIcon icon={faB} size="lg" />
          </Link>
        </LinkIconBox>
        <LinkIconBox title="깃허브 바로가기">
          <Link href="https://github.com/YouYou94" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
        </LinkIconBox>
        <LinkIconBox
          onClick={() => handleCopyClipBoard('010-5190-6628')}
          title="전화번호 복사하기"
        >
          <FontAwesomeIcon icon={faPhone} size="lg" />
        </LinkIconBox>
        <LinkIconBox
          onClick={() => handleCopyClipBoard('ybh4115@gmail.com')}
          title="이메일 복사하기"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </LinkIconBox>
      </LinkBox>
    </>
  );
};

const LinkBox = styled.div<{ mode: string }>`
  flex: 1;

  display: flex;
  flex-wrap: wrap;

  padding-bottom: 1rem;

  > div {
    &:hover {
      background-color: ${(prop) =>
        prop.mode === 'true' ? '' : 'rgb(245, 245, 245)'};

      color: #e7746f;
    }
  }
`;

const LinkIconBox = styled.div`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const Link = styled.a`
  flex: 1;

  text-align: center;

  ${LinkIconBox}:hover & {
    color: #e7746f;
  }
  &:visited {
    color: inherit;
  }
`;
