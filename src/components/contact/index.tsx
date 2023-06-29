import styled from 'styled-components';
import { PiPaperPlaneTiltDuotone } from 'react-icons/pi';
import { MessengerForm } from './MessengerForm';

export const Contact = () => {
  return (
    <Layout>
      <TitleBox>
        <Title>
          <PiPaperPlaneTiltDuotone size={36} />
          Contact
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

  padding: 0 2rem 8rem 2rem;

  gap: 0.5rem;
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
