import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    gap: 2rem;
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const Email = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  @media screen and (max-width: 768px) {
    border-bottom: 3px solid rgb(245, 245, 245);
    padding-bottom: 2rem;
  }
`;

export const LinkedIn = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const H3 = styled.h3`
  font-family: 'Alkatra';
  font-size: 1.25rem;

  border-bottom: 2px solid #f56a6a;
`;

/* Email */
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

export const Input = styled.input`
  width: 25rem;
  height: 2.75rem;

  padding: 0 0.5rem;

  @media screen and (max-width: 768px) {
    width: 20rem;
  }
`;

export const TextArea = styled.textarea`
  width: 25rem;
  height: 10rem;

  padding: 0.5rem;

  resize: none;

  @media screen and (max-width: 768px) {
    width: 20rem;
  }
`;

export const Button = styled.button<{ mode?: string }>`
  width: 12rem;
  height: 2.5rem;

  border: none;
  border-radius: 0.25rem;

  background-color: ${(prop) =>
    prop.mode === 'true' ? '' : 'rgb(34, 40, 49)'};

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
