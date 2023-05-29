import { ReactElement } from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const Span = styled.span<{ paddingLeft?: string }>`
  padding-left: ${(prop) => prop.paddingLeft}rem;

  font-family: 'Caveat';
  font-size: 1.2rem;

  color: #919191;

  transition: all 0.5s;

  @media screen and (max-width: 1024px) {
    padding-left: ${(prop) => Number(prop.paddingLeft) / 2}rem;
  }
`;

const Tag = styled(Span)`
  color: #0487d9;
`;

const Variable = styled(Span)`
  color: #9bdaf2;
`;

const Equal = styled(Span)``;

const Value = styled(Span)`
  color: #bf5f82;
`;

type TagProps = {
  tag: string;
  children?: string | ReactElement | ReactElement[];
  symbol?: string;
  paddingLeft?: string;
};

type VariableProps = {
  variable: string;
  value?: string;
};

export const OneLineTag = ({ tag, children, paddingLeft }: TagProps) => {
  return (
    <Fade>
      <Span paddingLeft={paddingLeft}>
        {'<'}
        <Tag>{tag}</Tag>
        {children}
        {'/>'}
      </Span>
    </Fade>
  );
};

export const OpenTag = ({ tag, children, symbol, paddingLeft }: TagProps) => {
  return (
    <Fade>
      <Span paddingLeft={paddingLeft}>
        {symbol ? `<${symbol}` : '<'}
        <Tag>{tag}</Tag>
        {children}
        {'>'}
      </Span>
    </Fade>
  );
};

export const CloseTag = ({ tag, paddingLeft }: TagProps) => {
  return (
    <Fade>
      {' '}
      <Span paddingLeft={paddingLeft}>
        {'</'}
        <Tag>{tag}</Tag>
        {'>'}
      </Span>
    </Fade>
  );
};

export const VariableTag = ({ variable, value }: VariableProps) => {
  return (
    <Variable>
      {` ${variable}`}
      {value ? (
        <>
          <Equal>=</Equal>
          <Value>{value}</Value>
        </>
      ) : (
        <></>
      )}
    </Variable>
  );
};
