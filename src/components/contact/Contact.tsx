import { sendForm } from 'emailjs-com';
import * as S from './ContactStyled';
import { useRef } from 'react';

const SERVICEID: string = String(process.env.REACT_APP_SERVICE_ID);
const TEMPLATID: string = String(process.env.REACT_APP_TEMPLATE_ID);
const USERID: string = String(process.env.REACT_APP_USER_ID);

export const Contact = () => {
  const form = useRef<any>();

  const handleSubmitSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendForm(SERVICEID, TEMPLATID, event.currentTarget, USERID)
      .then((result) => console.log('성공'))
      .catch((error) => console.log('실패'));

    event.currentTarget.reset();
  };
  return (
    <S.Layout>
      <S.ContactBox id="contact">
        <S.TitleBox>
          <S.Title>Send Your Message</S.Title>
        </S.TitleBox>

        <S.Form ref={form} onSubmit={handleSubmitSendMessage}>
          <S.Input name="from_email" placeholder="email_id@email.com" />
          <S.Input name="user_name" placeholder="your name" />
          <S.Input name="phone" placeholder="010-xxxx-xxxx" />
          <S.TextArea name="message" placeholder="Your Message" />
          <S.Button>Send Message</S.Button>
        </S.Form>
      </S.ContactBox>
    </S.Layout>
  );
};
