import { styled } from 'styled-components';
import { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';

type NavProps = {
  state: number;
  setState: Dispatch<SetStateAction<number>>;
};

export const Nav = ({ state, setState }: NavProps) => {
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
    <Layout>
      <NavBox mode={mode.toString()}>
        <NavItem page={(state === 0).toString()} onClick={() => setState(0)}>
          About
        </NavItem>
        <NavItem page={(state === 1).toString()} onClick={() => setState(1)}>
          Experience
        </NavItem>
        <NavItem page={(state === 2).toString()} onClick={() => setState(2)}>
          Contact
        </NavItem>
      </NavBox>
      <LinkedInBox mode={mode.toString()}>
        <LinkItem title="블로그 바로가기">
          <Link href="https://velog.io/@ybh4115" target="_blank">
            <FontAwesomeIcon icon={faB} size="lg" />
          </Link>
        </LinkItem>
        <LinkItem title="깃허브 바로가기">
          <Link href="https://github.com/YouYou94" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
        </LinkItem>
        <LinkItem
          title="전화번호 복사하기"
          onClick={() => handleCopyClipBoard('010-5190-6628')}
        >
          <FontAwesomeIcon icon={faPhone} size="lg" />
        </LinkItem>
        <LinkItem
          title="이메일 복사하기"
          onClick={() => handleCopyClipBoard('ybh4115@gmail.com')}
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </LinkItem>
      </LinkedInBox>
    </Layout>
  );
};

export const Layout = styled.nav`
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid rgb(204, 204, 204);
`;

export const NavBox = styled.div<{ mode: string }>`
  display: flex;

  > div {
    &:hover {
      background-color: ${(prop) =>
        prop.mode === 'true'
          ? 'rgb(66, 90, 115, .3)'
          : 'rgb(251, 251, 251, .9)'};

      color: #e7746f;
    }
  }
`;

export const LinkedInBox = styled.div<{ mode: string }>`
  width: 24rem;

  display: flex;
  justify-content: flex-end;

  > div {
    &:hover {
      background-color: ${(prop) =>
        prop.mode === 'true'
          ? 'rgb(66, 90, 115, .3)'
          : 'rgb(251, 251, 251, .9)'};

      color: #e7746f;
    }
  }

  @media screen and (max-width: 768px) {
    width: 16rem;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const NavItem = styled(Item)<{ page: string }>`
  width: 8rem;
  height: 4rem;

  font-family: 'LilitaOne';
  font-size: 1.2rem;

  color: ${(prop) => (prop.page === 'true' ? '#e7746f' : '')};
`;

export const LinkItem = styled(Item)`
  width: 4rem;
  height: 4rem;
`;

export const Link = styled.a`
  flex: 1;

  text-align: center;

  ${LinkItem}:hover & {
    color: #e7746f;
  }
  &:visited {
    color: inherit;
  }
`;
