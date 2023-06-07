import styled from 'styled-components';

export const Layout = styled.section`
  padding: 2rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;

  gap: 1rem;
`;

export const TitleBox = styled.div`
  display: flex;
`;

export const Title = styled.h3`
  font-family: 'Alkatra';

  border-bottom: 2px solid #f56a6a;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

export const Input = styled.input`
  width: 25rem;
  height: 2.75rem;

  padding: 0 0.5rem;
`;

export const TextArea = styled.textarea`
  width: 25rem;
  height: 10rem;

  padding: 0.5rem;
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
