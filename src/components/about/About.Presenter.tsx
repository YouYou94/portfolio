import { Fade } from 'react-awesome-reveal';
import { CloseTag, OpenTag, VariableTag } from '../common/Span';
import {
  About,
  Br,
  Box,
  IntroduceBox,
  TechBox,
  Span,
  Title,
  Empasis,
  TeckImg,
} from './AboutStyled';

export const AboutUI = () => {
  return (
    <About id="2">
      <Box>
        <OpenTag tag="body" paddingLeft="3" />
        <OpenTag tag="section" paddingLeft="6">
          <VariableTag variable="className" value='"About_Container"' />
        </OpenTag>

        <OpenTag tag="h1" paddingLeft="9" />
        <IntroduceBox>
          <Fade>
            <Title>자기소개</Title>
          </Fade>
        </IntroduceBox>
        <CloseTag tag="h1" paddingLeft="9" />

        <OpenTag tag="p" paddingLeft="9" />
        <IntroduceBox>
          <Fade duration={3000}>
            <Span>
              안녕하세요. <Empasis>프론트엔드 개발자 유병현</Empasis>입니다.
            </Span>
          </Fade>

          <Fade duration={3000}>
            <Span>
              작은 변화에도{' '}
              <Empasis>빠르고 새로운 결과를 보여주는 프론트엔드 매력</Empasis>에
              빠져 프론트엔드 개발 공부를 시작하였습니다.
            </Span>
          </Fade>

          <Fade duration={3000}>
            <Span>
              사용자에게
              <Empasis>1초도 아깝지 않은 컨텐츠를 제공하는 </Empasis>
              프론트엔드 개발자가 되는 것이 저의 <Empasis>커리어 골</Empasis>
              입니다.
            </Span>
          </Fade>
        </IntroduceBox>

        <CloseTag tag="p" paddingLeft="9" />

        <CloseTag tag="section" paddingLeft="6" />
      </Box>

      <Br />

      <Box>
        <OpenTag tag="section" paddingLeft="6">
          <VariableTag variable="className" value='"About_Container"' />
        </OpenTag>
        <OpenTag tag="h1" paddingLeft="9" />
        <TechBox>
          <Fade duration={3000}>
            <Title>기술스택</Title>
          </Fade>
        </TechBox>
        <CloseTag tag="h1" paddingLeft="9" />

        <Br />

        <OpenTag tag="img" paddingLeft="9" />
        <TechBox>
          <Fade duration={3000}>
            <TeckImg src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></TeckImg>
            <TeckImg src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black"></TeckImg>
          </Fade>
        </TechBox>

        <Br />

        <TechBox>
          <Fade duration={3000}>
            <TeckImg src="https://img.shields.io/badge/react-4892A9?style=for-the-badge&logo=react&logoColor=black"></TeckImg>
            <TeckImg src="https://img.shields.io/badge/redux--toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=black"></TeckImg>
            <TeckImg src="https://img.shields.io/badge/recoil-0094F5?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSI1OTZweCIgdmlld0JveD0iMCAwIDI1NiA1OTYiIHZlcnNpb249IjEuMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPg0KICAgIDx0aXRsZT5SZWNvaWw8L3RpdGxlPg0KICAgIDxnPg0KICAgICAgICA8cGF0aCBkPSJNMTI4LjAxMTI1NCwwIEMxNTUuODMzMTM3LDAgMTc4LjM2ODIwMiwyMi41MzUwNjQ4IDE3OC4zNjgyMDIsNTAuMzU2OTQ4MiBDMTc4LjM2ODIwMiw3MS4wOTY0NzcyIDE2NS44MDI3OTUsODguOTIxMzQ5OSAxNDcuODUzNjk1LDk2LjY0OTg1MzYgTDE0Ny4zMDgxNDIsOTYuODgwOTUyOSBMMTQ3LjMwODE0MiwxMTguMDk0MzEzIEMxNDcuMzA4MTQyLDEzOC41NzIxNDQgMTYyLjUyOTEyNSwxNTYuMDA1Nzc5IDE4Mi43NzU2MjIsMTU4Ljg1MzE3OSBMMTgzLjM5MDY4LDE1OC45MzQ5ODcgTDE4OS40NzA1MjEsMTU5LjcyODAxIEMyMjIuMzgwOTY4LDE2My44OTEzOCAyNDcuODg5ODY4LDE4Ny41NDk4OTQgMjU0LjQzMjMwNiwyMjAuMDYzODI5IEMyNjAuOTc0NzQ1LDI1Mi41Nzc3NjQgMjQ2LjcwMDMzNCwyODQuMjk4Njc2IDIxNy45NTMyNTcsMzAwLjk1MjE1NSBDMjA1LjA4Mjg4NywzMDguMzYyMzY4IDE5MS4wNjE2NjQsMzEyLjg5NTQ0OSAxNzYuMjY2OTE3LDMxNC40MjU2MjIgTDE3NS41MjY1MzcsMzE0LjQ5OTYyOCBMODQuMTMwNjU4NywzMjMuMDkwNzA4IEM3NC44MTI2NDA3LDMyMy45NDk4MTYgNjYuMDIzMzA0NiwzMjYuNzkxNDgyIDU3Ljg5NDgyMDgsMzMxLjQ4MzUzMyBDNDEuMzA3NDI3MSwzNDEuMDY1ODkyIDM4LjA2OTI1MDYsMzU3LjY1MzI4NiA0MC41ODA0ODk1LDM2OS45NDUxMzkgQzQzLjA2NjYxNiwzODIuMTE0MDc0IDUyLjM1MzYwNywzOTUuOTY3MDMzIDcwLjk0MjIzNzQsMzk4LjU1MTI4MyBMNzcuNTg4MjIwNSwzOTkuNDE5MTU0IEMxMTcuNjI3OTQyLDQwNC4zOTE0MDcgMTQ3Ljg4NzM3Myw0MzguMzE1OTExIDE0OC40ODg1NTcsNDc4LjU1NzQ0NyBMMTQ4LjQ5NzY3Niw0NzkuNzc4Nzk4IEwxNDguNDk3Njc2LDQ5OS40NzIxOTggQzE2Ni4xNDI0MzQsNTA3LjI3MDI1NSAxNzguNTAwMzczLDUyNC45ODEwOTggMTc4LjUwMDM3Myw1NDUuNTMzNjA2IEMxNzguNTAwMzczLDU3My4zNTU0ODkgMTU1Ljk2NTMwOCw1OTUuODkwNTU0IDEyOC4xNDM0MjQsNTk1Ljg5MDU1NCBDMTAwLjMyMTU0MSw1OTUuODkwNTU0IDc3Ljc4NjQ3NjIsNTczLjM1NTQ4OSA3Ny43ODY0NzYyLDU0NS41MzM2MDYgQzc3Ljc4NjQ3NjIsNTI0Ljg1OTUwMSA5MC4yODcxMTI4LDUwNy4wMzUyODMgMTA4LjE3MDc5Niw0OTkuMzA2Nzg1IEwxMDguNzE0MzY2LDQ5OS4wNzU2ODYgTDEwOC43MTQzNjYsNDc5Ljc3ODc5OCBDMTA4LjcxNDM2Niw0NTkuMzAwOTY3IDkzLjQ5MzM4MzMsNDQxLjg2NzMzMiA3My4yNDY4ODU5LDQzOS4wMTk5MzIgTDcyLjYzMTgyOCw0MzguOTM4MTIzIEw2Ni41NTE5ODY0LDQzOC4xNDUxMDEgQzMzLjY0MTU0LDQzMy45ODE3MzEgOC4xMzI2Mzk2OSw0MTAuMzIzMjE3IDEuNTkwMjAxNTQsMzc3LjgwOTI4MiBDLTUuMDE4MzIxODUsMzQ1LjI5NTM0NyA5LjMyMjE3MzksMzEzLjU3NDQzNSAzOC4wNjkyNTA2LDI5Ni45MjA5NTYgQzUwLjkzOTYyMDgsMjg5LjUxMDc0MyA2NC45NjA4NDM3LDI4NC45Nzc2NjIgNzkuNzU1NTkwNiwyODMuNDQ3NDg5IEw4MC40OTU5NzA4LDI4My4zNzM0ODMgTDE3MS44OTE4NDksMjc0Ljc4MjQwMiBDMTgxLjIwOTg2NywyNzMuOTIzMjk0IDE4OS45OTkyMDMsMjcxLjA4MTYyOSAxOTguMTI3Njg3LDI2Ni4zODk1NzggQzIxNC43MTUwODEsMjU2LjgwNzIxOSAyMTcuOTUzMjU3LDI0MC4yMTk4MjUgMjE1LjQ0MjAxOCwyMjcuOTI3OTcyIEMyMTIuOTU1ODkyLDIxNS43NTkwMzcgMjAzLjY2ODkwMSwyMDEuOTA2MDc4IDE4NS4wODAyNywxOTkuMzIxODI4IEwxNzguNDM0Mjg3LDE5OC40NTM5NTcgQzEzOC4zOTQ1NjYsMTkzLjQ4MTcwNCAxMDguMTM1MTM1LDE1OS41NTcyIDEwNy41MzM5NTEsMTE5LjMxNTY2NCBMMTA3LjUyNDgzMSwxMTguMDk0MzEzIEwxMDcuNTI0ODMxLDk2LjM1MjI3MSBDODkuOTQ2MTU5Miw4OC40ODgxMjgyIDc3LjY1NDMwNTcsNzAuODQzMzcwNyA3Ny42NTQzMDU3LDUwLjM1Njk0ODIgQzc3LjY1NDMwNTcsMjIuNTM1MDY0OCAxMDAuMTg5MzcsMCAxMjguMDExMjU0LDAgWiBNMTg4LjU0NTMyOCwzMzYuOTY4NjA4IEwyMTYuNzYzNzIzLDM2Ny44OTY0OTcgQzIzNy43NjQ5NSwzOTAuOTkxMzA0IDI0OS40MzkyNzYsNDIwLjc1NzQzNSAyNDkuNjcwNjYzLDQ1MS44NzI3MjcgTDI0OS42NzQxNyw0NTIuODE2MDIzIEwyMDkuODI0NzczLDQ1Mi44MTYwMjMgQzIwOS44MjQ3NzMsNDMxLjQ4NzY3NCAyMDEuOTg3NTg3LDQxMS4wNjYxMDggMTg3Ljc4ODAzLDM5NS4yMDYzMDIgTDE4Ny4zNTU3OTQsMzk0LjcyNzEwMiBMMTM5LjM3NzkxNCwzNDIuMTIzMjU2IEwxNzcuNzA3MzUsMzM4LjQ4ODU2OCBMMTc4LjkxODgyMiwzMzguMzUzNzY5IEMxODEuNzkwMDI5LDMzOC4wMjc1ODMgMTg0LjY1NjY1MywzMzcuNjUwOTcyIDE4Ny40ODYwOTQsMzM3LjE1ODc0MSBMMTg4LjU0NTMyOCwzMzYuOTY4NjA4IFogTTQyLjY5NTIxNywxNDMuNTM3MTI4IEM0Mi42OTUyMTcsMTY0Ljg2NTQ3NiA1MC41MzI0MDM3LDE4NS4yODcwNDMgNjQuNzMxOTYxLDIwMS4xNDY4NDggTDY1LjE2NDE5NjUsMjAxLjYyNjA0OSBMMTEzLjI3NDI0NywyNTQuMzYyMDY1IEw3Ny44NTI1NjE0LDI1Ny43MzI0MTIgTDc2LjgwMDM0MTMsMjU3LjgyODYwNyBDNzIuOTQyNjQyMSwyNTguMTk4NTI4IDY5LjA5MjIyMjIsMjU4Ljc1NzcxMSA2NS4zMjkxNTM5LDI1OS41MDYxNTUgTDY0LjMwNTA4ODUsMjU5LjcxNDk2OSBMMzUuODIyMzUyNywyMjguNDU2NjU0IEMxNC44MjExMjYyLDIwNS40MjcyNzEgMy4xNDY3OTk1NywxNzUuNTk3MDI0IDIuOTE1NDEzMTYsMTQ0LjQ4MDQ0MyBMMi45MTE5MDYyMiwxNDMuNTM3MTI4IEw0Mi42OTUyMTcsMTQzLjUzNzEyOCBaIiBmaWxsPSIjMUMxRTIxIi8+DQogICAgPC9nPg0KPC9zdmc+&logoColor=black"></TeckImg>
            <TeckImg src="https://img.shields.io/badge/context--api-61DAFB?style=for-the-badge&logo=react&logoColor=black"></TeckImg>
          </Fade>
        </TechBox>

        <Br />

        <TechBox>
          <Fade duration={3000}>
            <TeckImg src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black"></TeckImg>
          </Fade>
        </TechBox>
        <CloseTag tag="img" paddingLeft="9" />
        <CloseTag tag="section" paddingLeft="6" />
      </Box>
    </About>
  );
};
