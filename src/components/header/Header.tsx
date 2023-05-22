import { Fragment } from 'react';
import { Layout, NavBox, Nav, List } from './HeaderStyled';

export const Header = () => {
  return (
    <Layout>
      <Fragment></Fragment>
      <NavBox>
        <Nav>
          <List>About</List>
          <List>Project</List>
          <List>Contact</List>
        </Nav>
      </NavBox>
    </Layout>
  );
};
