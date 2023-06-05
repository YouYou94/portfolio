import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1rem 2rem;

  border-top: 1px solid rgb(204, 204, 204);
`;

export const Title = styled.h2`
  font-family: 'Anton';
  font-size: 5rem;

  text-align: center;
`;

export const CarouselSlide = styled.div`
  flex: 1;

  display: flex;

  gap: 5rem;

  @media screen and (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const StepBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Step = styled.div<{ rotate: number; mode: string }>`
  width: 2rem;
  height: 2rem;

  border-bottom: 6px solid
    ${(prop) => (prop.mode === 'true' ? '#eeeeee' : '#222831')};
  border-left: 6px solid
    ${(prop) => (prop.mode === 'true' ? '#eeeeee' : '#222831')};

  transform: rotate(${(prop) => prop.rotate}deg);

  cursor: pointer;

  z-index: 0;

  &:hover {
    border-bottom: 6px solid #ffd369;
    border-left: 6px solid #ffd369;
  }

  @media screen and (max-width: 1024px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

/* Carousel */
export const CarouselBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const SlideBox = styled.div<{ length: number; now: number }>`
  width: ${(prop) => prop.length * 100}%;
  height: 100%;

  display: flex;

  transform: translate(-${(prop) => prop.now * 25}%);
  transition: all 0.5s;
`;

export const ProjectBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  gap: 0.5rem;
`;

export const UserImg = styled.div<{ mode: string; imageurl: string }>`
  aspect-ratio: 2 / 1;

  border: 1px solid ${(prop) => (prop.mode === 'true' ? '#eeeeee' : '#393e46')};

  background-image: url(${(prop) => prop.imageurl});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProjectTitleBox = styled.div`
  display: flex;

  gap: 1rem;
`;

export const ProjectTitle = styled.h2`
  font-family: 'Anton';
`;

export const ProjectSubTitle = styled.h2`
  font-family: 'GowunDodum';
`;

export const RoleSpan = styled.span`
  font-family: 'GowunDodum';

  color: #8080c5;

  text-decoration: underline;
`;

export const AboutSpan = styled.span`
  font-family: 'GowunDodum';
  font-size: 1rem;
`;

export const TechSpan = styled.div`
  font-family: 'Alkatra';

  margin-left: 0.25rem;
`;

export const LinkBox = styled.div<{ mode: string }>`
  display: flex;

  margin-top: 1rem;

  gap: 1rem;

  > a {
    color: ${(prop) => (prop.mode === 'true' ? '#222831' : '#eeeeee')};
    background-color: ${(prop) =>
      prop.mode === 'true' ? '#eeeeee' : '#222831'};

    &:visited {
      color: ${(prop) => (prop.mode === 'true' ? '#222831' : '#eeeeee')};
    }

    &:hover {
      background-color: #ffd369;
      color: #222831;
    }
  }
`;

export const LinkAnchor = styled.a`
  width: 6rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;

  font-family: 'GowunDodum';

  cursor: pointer;
`;

export const ButtonBox = styled.div`
  height: 4rem;

  display: flex;
  justify-content: center;

  gap: 3rem;
`;

export const Button = styled.div<{ mode: string; ischeck: string }>`
  width: 2rem;
  height: 0.5rem;

  border-radius: 0.25rem;
  background-color: ${(prop) =>
    prop.ischeck === 'true'
      ? '#ffd369'
      : (prop) => (prop.mode === 'true' ? 'rgb(255, 255, 255)' : '#222831')};

  cursor: pointer;
`;
