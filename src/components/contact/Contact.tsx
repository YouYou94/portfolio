import { sendForm } from 'emailjs-com';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBloggerB, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';
import * as S from './ContactStyled';

const SERVICEID: string = String(process.env.REACT_APP_SERVICE_ID);
const TEMPLATID: string = String(process.env.REACT_APP_TEMPLATE_ID);
const USERID: string = String(process.env.REACT_APP_USER_ID);

export const Contact = () => {
  const form = useRef<any>();
  const mode = useRecoilValue(getMode);

  const handleSubmitSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendForm(SERVICEID, TEMPLATID, event.currentTarget, USERID)
      .then((result) => console.log('성공: ', result))
      .catch((error) => console.log('실패: ', error));

    event.currentTarget.reset();
  };

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };

  return (
    <S.Layout>
      <S.TitleBox>
        <S.Title>Contact</S.Title>
      </S.TitleBox>
      <S.ContactBox>
        <S.Email id="contact">
          <S.TitleBox>
            <S.SubTitle>Send Your Message</S.SubTitle>
          </S.TitleBox>

          <S.Form ref={form} onSubmit={handleSubmitSendMessage}>
            <S.Input name="from_email" placeholder="email@google.com" />
            <S.Input name="user_name" placeholder="your name" />
            <S.Input name="phone" placeholder="010-xxxx-xxxx" />
            <S.TextArea name="message" placeholder="Your Message..." />
            <S.Button>Send Message</S.Button>
          </S.Form>
        </S.Email>
        <S.LinkedIn>
          <S.TitleBox>
            <S.SubTitle>Linked In</S.SubTitle>
          </S.TitleBox>
          <S.IconContainer>
            <S.IconBox
              mode={mode.toString()}
              title="클릭하여 블로그 주소 바로가기"
            >
              <S.Link href="https://velog.io/@ybh4115" target="_blank">
                <FontAwesomeIcon icon={faBloggerB} size="2x" />
              </S.Link>
            </S.IconBox>
            <S.IconBox
              mode={mode.toString()}
              title="클릭하여 깃허브 주소 바로가기"
            >
              <S.Link href="https://github.com/YouYou94" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </S.Link>
            </S.IconBox>
            <S.IconBox
              mode={mode.toString()}
              onClick={() => handleCopyClipBoard('01051906628')}
              title="클릭하여 전화번호 복사하기"
            >
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </S.IconBox>
            <S.IconBox
              mode={mode.toString()}
              onClick={() => handleCopyClipBoard('ybh4115@gmail.com')}
              title="클릭하여 이메일 복사하기"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </S.IconBox>
          </S.IconContainer>
        </S.LinkedIn>
      </S.ContactBox>
    </S.Layout>
  );
};
