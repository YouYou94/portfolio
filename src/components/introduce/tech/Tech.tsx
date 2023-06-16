import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../../recoil';
import { TechStack } from '../../../constants';

export const Tech = () => {
  const mode = useRecoilValue(getMode);
  return (
    <>
      <TechBox>
        {TechStack?.map((tech: string, index: number) => {
          return (
            <TechBedge key={index} mode={mode.toString()}>
              # {tech}
            </TechBedge>
          );
        })}
      </TechBox>
    </>
  );
};

const TechBox = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;

  gap: 1rem;
`;

const TechBedge = styled.div<{ mode: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  padding: 0 1rem;

  font-family: 'Alkatra';
  font-size: 0.8rem;

  border: 1px solid
    ${(prop) => (prop.mode === 'true' ? '' : 'rgb(66, 90, 115)')};
`;
