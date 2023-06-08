import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';

export const Footer = () => {
  const mode = useRecoilValue(getMode);

  return (
    <Layout mode={mode.toString()}>
      <Span>Thank you for visiting</Span>
      <Span>developed by YouYou94.</Span>
    </Layout>
  );
};

const Layout = styled.footer<{ mode: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'transparent' : '#f56a6a'};
  color: rgb(238, 238, 238);

  gap: 2rem;
`;

export const Span = styled.span`
  font-family: 'Alkatra';
`;
