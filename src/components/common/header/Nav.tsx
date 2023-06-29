import styled from 'styled-components';

export const Nav = () => {
  return (
    <Layout>
      <List>
        <Item>HOME</Item>
        <Item>RESUME</Item>
        <Item>PROJECT</Item>
        <Item>CONTACT</Item>
      </List>
    </Layout>
  );
};

const Layout = styled.nav`
  flex: 1;

  display: flex;
`;

const List = styled.ul`
  flex: 1;

  display: flex;
  justify-content: flex-end;

  padding: 0 3rem;

  gap: 3rem;
`;

const Item = styled.li`
  position: relative;

  display: flex;
  align-items: center;

  font-family: 'Anton';

  cursor: pointer;

  &::after {
    position: absolute;

    content: '';

    bottom: 0;

    width: 0;
    height: 1rem;

    border-bottom: 2px solid rgb(66, 90, 115);

    opacity: 0;

    transition: all 0.5s;
  }

  &:hover {
    color: rgb(66, 90, 115);
  }

  &:hover::after {
    width: 100%;
    opacity: 1;
  }
`;
