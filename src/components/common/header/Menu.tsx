import styled from 'styled-components';
import { useState } from 'react';

export const Menu = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <Layout toggle={isToggle.toString()} onClick={() => setIsToggle(!isToggle)}>
      <Bar />
      <Bar />
      <Bar />
    </Layout>
  );
};

const Layout = styled.nav<{ toggle: string }>`
  position: fixed;

  top: 5rem;
  right: 5rem;

  width: 5rem;
  height: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  gap: 0.5rem;

  > span {
    ${(prop) =>
      prop.toggle === 'true'
        ? 'position:absolute; &:nth-child(1) { transform: rotate(-45deg); } &:nth-child(2) { opacity: 0; } &:nth-child(3) { transform: rotate(45deg); }'
        : ''};
  }

  &:hover {
    background-color: rgb(204, 204, 204, 0.3);
  }
`;

const Bar = styled.span`
  width: 2.5rem;
  height: 0.25rem;

  border-radius: 0.25rem;

  background-color: rgb(45, 45, 45);

  transition: all 0.3s;
`;
