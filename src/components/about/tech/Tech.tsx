import { Layout, Title, TechBox, TechBadge } from './TechStyled';

export const Tech = () => {
  return (
    <Layout>
      <Title>TECH</Title>
      <TechBox>
        <TechBadge
          backgroundcolor="#3178C6"
          title="Portfolio | Offline Memo App"
        >
          Typescript
        </TechBadge>
        <TechBadge backgroundcolor="#F7DF1E" title="Bujolog | Order App">
          Javascript
        </TechBadge>
        <TechBadge backgroundcolor="#61DAFB">React</TechBadge>
      </TechBox>
      <TechBox>
        <TechBadge backgroundcolor="#764ABC" title="Bujolog">
          Redux-Toolkit
        </TechBadge>
        <TechBadge
          backgroundcolor="#3578E5"
          title="Portfolio | Offline Memo App"
        >
          Recoil
        </TechBadge>
        <TechBadge backgroundcolor="#61DAFB" title="Order App">
          Context API
        </TechBadge>
      </TechBox>
      <TechBox>
        <TechBadge backgroundcolor="#DB7093">Styled-Components</TechBadge>
        <TechBadge backgroundcolor="#FFCA28">Firebase</TechBadge>
      </TechBox>
    </Layout>
  );
};
