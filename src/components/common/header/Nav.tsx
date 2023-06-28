import styled from 'styled-components';

export const Nav = () => {
  return (
    <Layout>
      <List>
        <Item>HOME</Item>
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
  align-items: center;

  padding: 0 2rem;

  gap: 3rem;
`;

const Item = styled.li`
  font-family: 'Anton';
  font-size: 1.5rem;

  cursor: pointer;
`;
