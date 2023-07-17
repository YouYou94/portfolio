import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';
import { FaGithub, FaBloggerB } from 'react-icons/fa6';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { PiPlugsConnectedBold } from 'react-icons/pi';

const PhoneNum: string = '010-5190-6628';
const Email: string = 'ybh4115@gmail.com';

export const Footer = () => {
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
    <Layout mode={mode.toString()}>
      <Box>
        <LinkBox>
          <LinkIconBox title="깃허브 바로가기">
            <Anchor href="https://github.com/YouYou94" target="_blank">
              <FaGithub size={22} />
            </Anchor>
          </LinkIconBox>
          <LinkIconBox title="블로그 바로가기">
            <Anchor href="https://velog.io/@ybh4115" target="_blank">
              <FaBloggerB size={22} />
            </Anchor>
          </LinkIconBox>
          <LinkIconBox
            title="전화번호 복사하기"
            onClick={() => handleCopyClipBoard(PhoneNum)}
          >
            <FaPhoneAlt size={22} />
          </LinkIconBox>
          <LinkIconBox
            title="이메일 복사하기"
            onClick={() => handleCopyClipBoard(Email)}
          >
            <FaEnvelope size={22} />
          </LinkIconBox>
        </LinkBox>
        <Text>Contact Me</Text>
        <Text>
          본 페이지는 상업적 목적이 아닌 개인 포트폴리오 용도로 만들어졌습니다.
          YouYou94 ⓒ 2023 Portfolio
        </Text>
        <Text>
          <PiPlugsConnectedBold size={10} /> 방문해주셔서 감사합니다.
        </Text>
      </Box>
    </Layout>
  );
};

const Layout = styled.footer<{ mode: string }>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid rgb(204, 204, 204, 0.5);
  padding: 4rem 4rem 2rem;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'transparent' : 'rgb(204, 204, 204, 0.25)'};

  @media screen and (max-width: 1024px) {
    padding: 4rem 1rem 2rem;
  }
`;

const Box = styled.div`
  width: 48rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`;

const LinkBox = styled.div`
  display: flex;

  gap: 1rem;
`;

const LinkIconBox = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid rgb(204, 204, 204, 0.5);

  cursor: pointer;

  &:hover {
    background-color: rgb(204, 204, 204, 0.25);
  }
`;

const Anchor = styled.a`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }
`;

const Text = styled.span`
  font-family: 'GowunDodum';
  font-size: 0.8rem;
`;
