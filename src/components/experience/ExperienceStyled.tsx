import styled from 'styled-components';

export const Experience = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  border-top: 1px solid #eeeeee;
  padding: 1rem 6rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 0 1rem 0;
  }
`;

export const Br = styled.br``;

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

export const SlideBox = styled.div<{ now: number }>`
  position: absolute;

  width: 80rem;
  height: 28rem;

  display: flex;

  gap: 1rem;

  transform: translate(-${(prop) => prop.now * 20}rem);
  transition: all 0.5s;
`;

export const Project = styled.div`
  width: 20rem;
  height: 28rem;

  border: 1px solid #eeeeee;
  border-radius: 2rem;

  cursor: pointer;

  &:hover {
    border: 1px solid #ffd369;
  }
`;

export const ButtonBox = styled.div`
  display: flex;

  gap: 0.5rem;
`;

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

export const Btn = styled.button<{ isCheck: string }>`
  width: 2rem;
  height: 0.5rem;

  background-color: ${(prop) =>
    prop.isCheck === 'true' ? '#eeeeee' : '#393e46'};

  border: none;

  &:hover {
    background-color: #ffd369;
  }
`;
