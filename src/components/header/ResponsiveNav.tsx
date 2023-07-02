import styled from 'styled-components';
import { HiOutlineBars3, HiMiniXMark } from 'react-icons/hi2';
import { useRef, useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';
import { Link } from 'react-scroll';

export const ResponsiveNav = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mode = useRecoilValue(getMode);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleClickMenuBar = () => setIsToggle(!isToggle);

  /* 모달 영역 밖 클릭 시 모달창 닫힘 기능 */
  const handleClickOutSide = (event: any) => {
    if (isToggle && !ref.current?.contains(event.target)) {
      setIsToggle(false);
    }
  };

  useEffect(() => {
    if (isToggle) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <Layout>
      <Box onClick={handleClickMenuBar}>
        <HiOutlineBars3 size={28} />
      </Box>
      <Menu ref={ref} toggle={isToggle.toString()} mode={mode.toString()}>
        <MenuHeader>
          <Box onClick={handleClickMenuBar}>
            <HiMiniXMark size={28} />
          </Box>
        </MenuHeader>
        <List>
          <Item>
            <Link to="intro" spy={true} smooth={true}>
              HOME
            </Link>
          </Item>
          <Item>
            <Link to="project" spy={true} smooth={true}>
              PROJECT
            </Link>
          </Item>
          <Item>
            <Link to="contact" spy={true} smooth={true}>
              CONTACT
            </Link>
          </Item>
          <Item>RESUME</Item>
        </List>
      </Menu>
    </Layout>
  );
};

const Layout = styled.nav`
  position: relative;

  flex: 1;

  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

const Box = styled.div`
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

const Menu = styled.div<{ toggle: string; mode: string }>`
  position: absolute;

  right: ${(prop) => (prop.toggle === 'true' ? '-6rem' : '-26rem')};

  width: 20rem;
  height: 100vh;

  display: flex;
  flex-direction: column;

  border-left: 1px solid rgb(204, 204, 204, 0.3);

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(34, 40, 49)' : 'rgb(255, 255, 255)'};

  transition: all 0.5s;
`;

const MenuHeader = styled.div`
  height: 3rem;

  border-bottom: 1px solid rgb(204, 204, 204, 0.3);
`;

const List = styled.ul`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding-top: 2rem;

  gap: 1rem;
`;

const Item = styled.li`
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Anton';
  font-size: 1.3rem;

  cursor: pointer;

  &:hover {
    background-color: rgb(204, 204, 204, 0.25);
  }
`;
