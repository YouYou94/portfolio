import styled from 'styled-components';
import { FaGithub, FaBloggerB } from 'react-icons/fa6';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Phone_Num: string = '010-5190-6628';
const Email: string = 'ybh4115@gmail.com';

export const Footer = () => {
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
      <Box>
        <LinkBox title="깃허브 바로가기">
          <Link href="https://github.com/YouYou94" target="_blank">
            <FaGithub size={28} />
          </Link>
        </LinkBox>
        <Label>깃허브 바로가기</Label>
      </Box>
      <Box>
        <LinkBox title="블로그 바로가기">
          <Link href="https://velog.io/@ybh4115" target="_blank">
            <FaBloggerB size={28} />
          </Link>
        </LinkBox>
        <Label>블로그 바로가기</Label>
      </Box>
      <Box>
        <LinkBox
          title="전화번호 복사하기"
          onClick={() => handleCopyClipBoard(Phone_Num)}
        >
          <AiFillPhone size={28} />
        </LinkBox>
        <Label>전화번호 복사하기</Label>
      </Box>
      <Box>
        <LinkBox
          title="이메일 복사하기"
          onClick={() => handleCopyClipBoard(Email)}
        >
          <MdEmail size={28} />
        </LinkBox>
        <Label>이메일 복사하기</Label>
      </Box>
    </Layout>
  );
};

const Layout = styled.footer`
  height: 6rem;

  display: flex;
  justify-content: space-between;

  padding: 0 6rem;
`;

const Box = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  gap: 0.75rem;
`;

const LinkBox = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: rgb(204, 204, 204, 0.1);
  }
`;

const Link = styled.a`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  &:visited {
    color: inherit;
  }
`;

const Label = styled.label``;
