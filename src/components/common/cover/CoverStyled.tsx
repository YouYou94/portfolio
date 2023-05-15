import styled from 'styled-components';

export const Section = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgb(30, 30, 90);

  gap: 2rem;
`;

export const Header = styled.header`
  height: 12rem;

  display: flex;
  align-items: center;

  padding: 0 5rem;

  background-color: rgb(30, 30, 90);

  gap: 2rem;
`;

export const CoverH1 = styled.h1`
  // 폰트 설정하기
  // 폰트 크기 설정하기

  color: rgb(255, 255, 255);

  transition: 0.3s all;

  &:hover {
    // 폰트 사이즈 크게 하기
  }
`;

export const ProducerLabel = styled.label`
  // 폰트 설정하기
  // 폰트 크기 설정하기

  color: rgb(255, 255, 255);
`;
