import { sendForm } from 'emailjs-com';
import { useRef } from 'react';
import * as S from './ContactStyled';

const SERVICEID: string = String(process.env.REACT_APP_SERVICE_ID);
const TEMPLATID: string = String(process.env.REACT_APP_TEMPLATE_ID);
const USERID: string = String(process.env.REACT_APP_USER_ID);

export const Contact = () => {
  const form = useRef<any>();

  const handleSubmitSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendForm(SERVICEID, TEMPLATID, event.currentTarget, USERID)
      .then((result) => console.log('성공: ', result))
      .catch((error) => console.log('실패: ', error));

    event.currentTarget.reset();
  };

  return (
    <S.Layout>
      <S.Email id="contact">
        <S.Box>
          <S.H3>Send Your Message</S.H3>
        </S.Box>
        <S.Form ref={form} onSubmit={handleSubmitSendMessage}>
          <S.Input name="from_email" placeholder="email@google.com" />
          <S.Input name="user_name" placeholder="name" />
          <S.Input name="phone" placeholder="010-xxxx-xxxx" />
          <S.TextArea name="message" placeholder="Message" />
          <S.Button>Send Message</S.Button>
        </S.Form>
      </S.Email>
    </S.Layout>
  );
};
