import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  padding: 5rem 1rem 1rem 1rem;

  background-color: #222831;
`;

export const CoverBox = styled.div`
  width: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.span`
  font-family: 'GowunDodum';
  font-size: 5rem;

  color: #eeeeee;

  &:hover {
    color: #ffd369;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
`;

export const HeaderTitle = styled.span`
  margin: 0 0.3rem;

  font-family: 'GowunDodum';

  color: #eeeeee;

  text-align: end;

  &:hover {
    color: #ffd369;
  }
`;
