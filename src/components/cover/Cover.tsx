import styled from 'styled-components';

type Props = {
  state: boolean;
};

export const Cover = ({ state }: Props) => {
  return (
    <Box mode={state.toString()}>
      <Tag>{'<title>'}</Tag>
      <Title>PORTFOLIO</Title>
      <SubTitle>
        YouYou94 | Frontend Developer<Tag>{' </title>'}</Tag>
      </SubTitle>
    </Box>
  );
};

const Box = styled.div<{ mode: string }>`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    color: ${(prop) =>
      prop.mode === 'true' ? 'rgb(102, 102, 102)' : 'rgb(204, 204, 204)'};
  }
`;

const Title = styled.h1`
  display: block;

  font-family: 'Anton';
  font-size: 12rem;
  line-height: 1;

  user-select: none;

  @media screen and (max-width: 768px) {
    font-size: 6rem;
  }
`;

export const SubTitle = styled.h3`
  font-family: 'Alkatra';
  font-size: 1.1rem;

  text-align: end;
  user-select: none;
`;

export const Tag = styled.span`
  font-family: 'Caveat';
  font-size: 1.5rem;
`;
