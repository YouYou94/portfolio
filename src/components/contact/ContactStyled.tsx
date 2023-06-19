import styled from 'styled-components';
import ContactImage from '../../assets/contact.png';

export const Layout = styled.section`
  position: relative;

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background-image: url(${ContactImage});
  background-repeat: no-repeat;
  background-position: left;

  padding: 2rem 10rem;

  gap: 2rem;

  @media screen and (max-width: 1024px) {
    align-items: center;

    padding: 2rem 0rem;
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const Email = styled.div`
  width: 30rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 25rem;
  }
`;

export const H3 = styled.h3`
  font-family: 'Alkatra';
  font-size: 1.5rem;
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
  height: 15rem;

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
