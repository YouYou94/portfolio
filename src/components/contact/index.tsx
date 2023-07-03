import styled from 'styled-components';
import { PiPaperPlaneTiltDuotone } from 'react-icons/pi';
import { MessengerForm } from './MessengerForm';

export const Contact = () => {
  return (
    <Layout id="contact">
      <TitleBox>
        <Title>
          <PiPaperPlaneTiltDuotone size={36} />
          Send Your Message
        </Title>
      </TitleBox>
      <Line />
      <MessengerForm />
    </Layout>
  );
};

const Layout = styled.section`
  width: 48rem;

  display: flex;
  flex-direction: column;

  padding: 0 2rem 8rem;

  gap: 0.5rem;

  @media screen and (max-width: 1024px) {
    width: 36rem;

    padding: 0 1rem 8rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    padding: 0rem 0.5rem 8rem;
  }
`;

const Line = styled.div`
  width: 100%;

  border-top: 1px solid rgb(204, 204, 204);
  padding-bottom: 2.5rem;
`;

const TitleBox = styled.div`
  display: flex;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;

  font-family: 'GowunDodum';
  font-size: 1.5rem;
  font-weight: bold;

  gap: 0.5rem;
`;
