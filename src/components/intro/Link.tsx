import styled from 'styled-components';
import { PiLinkDuotone } from 'react-icons/pi';
import { FaGithub, FaBloggerB } from 'react-icons/fa6';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const PhoneNum: string = '010-5190-6628';
const Email: string = 'ybh4115@gmail.com';

export const Link = () => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };

  return (
    <Layout>
      <TitleBox>
        <IconBox>
          <PiLinkDuotone size={30} />
        </IconBox>
        <Title>링크</Title>
      </TitleBox>
      <Line />
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
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 2rem;

  gap: 0.5rem;
`;

const Line = styled.div`
  width: 100%;

  border-top: 1px solid rgb(204, 204, 204);
`;

const IconBox = styled.div``;

const TitleBox = styled.div`
  display: flex;

  gap: 1rem;
`;

const Title = styled.h2`
  font-family: 'GowunDodum';
  font-size: 1.25rem;
  font-weight: bold;
`;

const LinkBox = styled.div`
  display: flex;

  padding: 0 30px;

  gap: 1rem;
`;

const LinkIconBox = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

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

  &:visited {
    color: inherit;
  }
`;
