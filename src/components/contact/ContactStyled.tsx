import styled from 'styled-components';

export const Layout = styled.section`
  height: calc(100vh - 4rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;

  gap: 2rem;
`;

export const Box = styled.div`
  display: flex;
`;

export const Email = styled.div`
  width: 30rem;

  flex: 1;

  display: flex;
  flex-direction: column;

  border-bottom: 3px solid rgb(245, 245, 245);
  padding-bottom: 2rem;

  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 25rem;
  }
`;

export const LinkedIn = styled.div`
  width: 30rem;

  flex: 1;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 25rem;
  }
`;

export const H3 = styled.h3`
  font-family: 'Alkatra';
  font-size: 1.25rem;

  border-bottom: 2px solid rgb(204, 204, 204);
`;

/* Email */
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

export const Input = styled.input`
  width: 30rem;
  height: 2.75rem;

  padding: 0 0.5rem;

  @media screen and (max-width: 768px) {
    width: 25rem;
  }
`;

export const TextArea = styled.textarea`
  width: 30rem;
  height: 10rem;

  padding: 0.5rem;

  resize: none;

  @media screen and (max-width: 768px) {
    width: 25rem;
  }
`;

export const Button = styled.button<{ mode?: string }>`
  width: 12rem;
  height: 2.5rem;

  border: none;
  border-radius: 0.25rem;

  background-color: ${(prop) =>
    prop.mode === 'true' ? '' : 'rgb(66, 90, 115)'};

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(34, 40, 49)' : 'rgb(238, 238, 238)'};

  &:hover {
    background-color: #f56a6a;
  }
`;

export const IconContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconBox = styled.div<{ mode: string }>`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(prop) =>
      prop.mode === 'true' ? '' : 'rgb(245, 245, 245)'};

    color: #e7746f;
  }

  cursor: pointer;
`;

export const Link = styled.a`
  &:visited {
    color: inherit;
  }
`;
