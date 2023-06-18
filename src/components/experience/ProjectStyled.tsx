import styled from 'styled-components';

export const Box = styled.article`
  position: relative;

  aspect-ratio: 1 / 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0.25rem;
  padding: 0.25rem;

  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.18);

  gap: 1rem;

  cursor: pointer;
`;

export const UI = styled.div<{ mode: string }>`
  aspect-ratio: 1 / 1;

  overflow: hidden;

  z-index: 2;

  transition: 0.1s ease-in-out;

  ${Box}:hover & {
    opacity: 0;
  }
`;

export const UIimg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const ProjectBox = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;

  z-index: 3;
  opacity: 0;

  transition: 0.25s ease-in-out;

  ${Box}:hover & {
    opacity: 1;
  }
`;

export const ContentBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  @media screen and (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const LinkBox = styled.div<{ mode: string }>`
  display: flex;

  gap: 0.5rem;

  > button {
    border: 1px solid
      ${(prop) =>
        prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(66, 90, 115)'};

    color: ${(prop) =>
      prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(34, 40, 49)'};

    &:hover {
      color: ${(prop) =>
        prop.mode === 'true' ? 'rgb(34, 40, 49)' : 'rgb(238, 238, 238)'};

      background-color: ${(prop) =>
        prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(66, 90, 115)'};
    }
  }
`;

export const Title = styled.h3`
  font-family: 'Alkatra';
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Span = styled.span`
  font-family: 'GowunDodum';

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  width: 8rem;
  height: 2rem;

  border-radius: 0.5rem;

  background-color: transparent;

  font-family: 'GowunDodum';
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    width: 3rem;
    height: 1.5rem;

    font-size: 0.75rem;
  }
`;

export const Link = styled.a`
  &:visited {
    color: inherit;
  }
`;
