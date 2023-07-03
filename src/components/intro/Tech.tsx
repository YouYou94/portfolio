import styled from 'styled-components';
import { PiHammerDuotone } from 'react-icons/pi';
import { Framework_Library, Language, MarkUp, Tool } from '../../constants';
import { useRecoilValue } from 'recoil';
import { getMode } from '../../recoil';

export const Tech = () => {
  const mode = useRecoilValue(getMode);

  return (
    <Layout>
      <TitleBox>
        <IconBox>
          <PiHammerDuotone size={30} />
        </IconBox>
        <Title>기술스택</Title>
      </TitleBox>
      <Line />
      <TechList>
        <TechItem>
          <TechTitle>Language</TechTitle>
          <TechBedgeBox>
            {Language?.map((value: string, index: number) => {
              return (
                <TechBedge key={index} mode={mode.toString()}>
                  {value}
                </TechBedge>
              );
            })}
          </TechBedgeBox>
        </TechItem>
        <TechItem>
          <TechTitle>Framework / Library</TechTitle>
          <TechBedgeBox>
            {Framework_Library?.map((value: string, index: number) => {
              return (
                <TechBedge key={index} mode={mode.toString()}>
                  {value}
                </TechBedge>
              );
            })}
          </TechBedgeBox>
        </TechItem>
        <TechItem>
          <TechTitle>MarkUp</TechTitle>
          <TechBedgeBox>
            {MarkUp?.map((value: string, index: number) => {
              return (
                <TechBedge key={index} mode={mode.toString()}>
                  {value}
                </TechBedge>
              );
            })}
          </TechBedgeBox>
        </TechItem>
        <TechItem>
          <TechTitle>Tool</TechTitle>
          <TechBedgeBox>
            {Tool?.map((value: string, index: number) => {
              return (
                <TechBedge key={index} mode={mode.toString()}>
                  {value}
                </TechBedge>
              );
            })}
          </TechBedgeBox>
        </TechItem>
      </TechList>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

const Line = styled.div`
  width: 100%;

  border-top: 1px solid rgb(204, 204, 204);
`;

const IconBox = styled.div``;

const TitleBox = styled.div`
  display: flex;

  gap: 1rem;
`;

const Title = styled.h2`
  font-family: 'GowunDodum';
  font-size: 1.25rem;
  font-weight: bold;
`;

const TechList = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0 30px;

  gap: 0.75rem;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    gap: 0.25rem;
  }
`;

const TechTitle = styled.span`
  flex: 1;

  font-family: 'GowunDodum';
`;

const TechBedgeBox = styled.div`
  flex: 2;

  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;
`;

const TechBedge = styled.div<{ mode: string }>`
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;

  background-color: rgb(204, 204, 204, 0.5);
  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(55, 118, 171)'};

  font-family: 'GowunDodum';
  font-size: 0.8rem;
  font-weight: bold;
`;
