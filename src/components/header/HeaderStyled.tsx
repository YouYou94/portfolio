import styled from 'styled-components';

export const Layout = styled.header<{ mode: string }>`
  height: 8rem;

  display: flex;
  flex-direction: column;

  margin: 0 5rem;
  border-bottom: 4px solid
    ${(prop) =>
      prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(66, 90, 115)'};

  @media screen and (max-width: 1024px) {
    margin: 0 4rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0 2rem;
  }

  @media screen and (max-width: 480px) {
    margin: 0 1rem;
  }
`;

const Box = styled.div`
  flex: 1;

  display: flex;
`;

/* Top */
export const Top = styled(Box)`
  justify-content: space-between;
`;

export const Hamberger = styled.div<{
  scroll: number;
  mode: string;
  toggle: string;
}>`
  width: 4rem;
  height: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(prop) =>
    prop.scroll >= 100
      ? `position:fixed; top: 1rem; border-radius: 50%; ${
          prop.mode === 'true'
            ? 'background-color: rgb(66, 90, 115, .9)'
            : 'background-color: rgb(245, 245, 245, .9)'
        }; z-index: 99;`
      : ''}

  > Span {
    background-color: ${(prop) =>
      prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(66, 90, 115)'};

    ${(prop) => (prop.toggle === 'true' ? 'position: absolute' : '')};

    &:first-child {
      ${(prop) => (prop.toggle === 'true' ? 'transform: rotate(45deg)' : '')};
    }
    &:nth-last-child(1) {
      ${(prop) => (prop.toggle === 'true' ? 'transform: rotate(-45deg)' : '')};
    }
    &:nth-last-child(2) {
      ${(prop) => (prop.toggle === 'true' ? 'opacity: 0' : '')};
    }
  }

  cursor: pointer;

  &:hover {
    background-color: ${(prop) =>
      prop.mode === 'true' ? '' : 'rgb(245, 245, 245)'};
  }
`;

export const Bar = styled.span`
  width: 33px;
  height: 4px;

  margin-bottom: 5px;
  border-radius: 3px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.2s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.2s ease;

  ${Hamberger}:hover & {
    background-color: #e7746f;
  }
`;

export const ModeChanger = styled.div<{ mode: string }>`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: ${(prop) =>
      prop.mode === 'true' ? '' : 'rgb(245, 245, 245)'};

    color: #e7746f;
  }
`;

/* Bottom */
export const Bottom = styled(Box)`
  justify-content: space-between;
`;

export const TitleBox = styled(Box)`
  align-items: flex-end;

  padding-bottom: 0.25rem;
`;

export const Title = styled.strong`
  cursor: pointer;

  font-family: 'Alkatra';
  font-size: 1.1rem;

  &:hover {
    color: #e7746f;
  }
`;

export const ContactBox = styled(Box)<{ mode: string }>`
  justify-content: flex-end;
  align-items: flex-end;

  > div {
    &:hover {
      background-color: ${(prop) =>
        prop.mode === 'true' ? '' : 'rgb(245, 245, 245)'};
    }

    cursor: pointer;
  }
`;

export const Contact = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #e7746f;
  }
`;

export const Link = styled.a`
  ${Contact}:hover & {
    color: #e7746f;
  }

  &:visited {
    color: inherit;
  }
`;
