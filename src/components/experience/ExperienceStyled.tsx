import styled from 'styled-components';

export const Experience = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 0 0 0 6rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 0 1rem 0;
  }
`;

export const Br = styled.br``;

export const Span = styled.span`
  font-family: 'GowunDodum';

  user-select: none;
`;

export const Title = styled(Span)`
  font-size: 3rem;

  &:hover {
    color: #ffd369;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled(Box)`
  justify-content: center;
  align-items: center;
`;

export const ProjectBox = styled(Box)`
  position: relative;

  flex: 1;

  justify-content: center;
  align-items: center;

  overflow: hidden;

  gap: 1rem;
`;

export const CarouselBox = styled.div`
  position: relative;

  width: 20rem;
  height: 28rem;
`;

export const SlideBox = styled.div<{ now: number; length: number }>`
  position: absolute;

  width: ${(prop) => prop.length * 20}rem;
  height: 28rem;

  display: flex;

  gap: 1rem;

  transform: translate(-${(prop) => prop.now * 20 + prop.now}rem);
  transition: all 0.5s;
`;

/* PROJECT */
export const Project = styled.div`
  width: 20rem;
  height: 28rem;

  display: flex;
  flex-direction: column;

  border: 1px solid #eeeeee;
  border-radius: 2rem;

  cursor: pointer;

  gap: 1rem;

  transition: all 0.5s;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

export const Line = styled.div`
  border: 1px solid #393e46;
  margin: 0 1rem;
`;

export const ProjectUI = styled.div<{ iconurl: string }>`
  width: calc(20rem - 2px);
  height: 13rem;

  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  background-image: url(${(prop) => prop.iconurl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ProjectTitle = styled(Span)`
  font-size: 1.3rem;

  padding: 0 1rem;
`;

export const TechBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 0 1rem;

  gap: 0.5rem;
`;

export const TechBadge = styled.div<{ backgroundcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.25rem;
  padding: 0.1rem 0.5rem;

  background-color: ${(prop) => prop.backgroundcolor};
  color: #222831;

  font-family: 'Alkatra';
  font-size: 0.75rem;
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 1.5rem;

  gap: 0.5rem;
`;

export const Link = styled.a`
  font-family: 'GowunDodum';

  color: #eeeeee;

  &:hover {
    color: #ffd369;
  }
`;

/* 캐러셀 버튼 */
export const ButtonBox = styled.div`
  display: flex;

  gap: 0.5rem;
`;

export const Button = styled.button<{ ischeck: string }>`
  width: 2rem;
  height: 0.5rem;

  background-color: ${(prop) =>
    prop.ischeck === 'true' ? '#eeeeee' : '#393e46'};

  border: none;

  &:hover {
    background-color: #ffd369;
  }
`;
