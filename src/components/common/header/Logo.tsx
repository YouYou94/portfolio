import { Link } from 'react-scroll';
import styled from 'styled-components';

type Props = {
  state: boolean;
};

export const Logo = ({ state }: Props) => {
  return (
    <Box>
      <Link to="top" spy={true} smooth={true}>
        <Button mode={state.toString()} title="YouYou94 | 처음으로 돌아가기">
          Y
        </Button>
      </Link>
    </Box>
  );
};

const Box = styled.div`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ mode: string }>`
  flex: 1;

  border: none;
  background-color: transparent;

  font-family: 'LilitaOne';
  font-size: 2.5rem;

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(238, 238, 238)' : 'rgb(34, 40, 49)'};

  cursor: pointer;

  &:hover {
    color: rgb(255, 211, 105);
  }
`;
