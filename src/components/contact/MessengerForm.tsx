import styled from 'styled-components';
import { sendForm } from 'emailjs-com';
import { useRef } from 'react';

const SERVICEID: string = String(process.env.REACT_APP_SERVICE_ID);
const TEMPLATID: string = String(process.env.REACT_APP_TEMPLATE_ID);
const USERID: string = String(process.env.REACT_APP_USER_ID);

export const MessengerForm = () => {
  const form = useRef<any>();

  const handleSubmitSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendForm(SERVICEID, TEMPLATID, event.currentTarget, USERID)
      .then((result) => console.log('성공: ', result))
      .catch((error) => console.log('실패: ', error));

    event.currentTarget.reset();
  };

  return (
    <Layout>
      <Form ref={form} onSubmit={handleSubmitSendMessage}>
        <Input name="from_email" placeholder="email@google.com" />
        <Input name="user_name" placeholder="name" />
        <Input name="phone" placeholder="010-xxxx-xxxx" />
        <TextArea name="message" placeholder="Message" />
        <Button>Send Message</Button>
      </Form>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const Input = styled.input`
  width: 25rem;
  height: 2.25rem;

  border: 1px solid rgb(204, 204, 204);
  padding: 0 0.5rem;

  outline: none;
`;

const TextArea = styled.textarea`
  width: 25rem;
  height: 10rem;

  border: 1px solid rgb(204, 204, 204);
  padding: 0.5rem;

  outline: none;
  resize: none;
`;

const Button = styled.button<{ mode?: string }>`
  width: 12rem;
  height: 2.5rem;

  border: none;
  border-radius: 0.25rem;

  background-color: ${(prop) =>
    prop.mode === 'true' ? '' : 'rgb(66, 90, 115)'};

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(34, 40, 49)' : 'rgb(238, 238, 238)'};
`;
