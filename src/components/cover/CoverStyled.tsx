import styled, { keyframes } from 'styled-components';
import ScrollIcon from '../../assets/scroll.png';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem;

  @media screen and (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;

export const TagBox = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 3rem;
`;

export const HtmlTag = styled(TagBox)``;

export const MetaTag = styled(TagBox)``;

export const HeadTag = styled(TagBox)``;

export const TitleTag = styled(TagBox)``;

export const BodyTag = styled(TagBox)``;

export const MainTag = styled(TagBox)``;

export const HeaderTag = styled(TagBox)``;

export const H1Tag = styled(TagBox)``;

export const SectionTag = styled(TagBox)``;

export const FooterTag = styled(TagBox)``;

const move = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-.5rem);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-.5rem);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Scroll = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  margin: 1rem 0 1rem 4rem;

  background-image: url(${ScrollIcon});
  background-repeat: no-repeat;
  background-size: cover;

  animation: ${move} 3s ease-out infinite;
`;

export const TagLabel = styled.label`
  font-family: 'Alkatra';
  font-size: 0.8rem;

  color: #393e46;

  :hover {
    color: #eeeeee;
  }
`;

export const Label = styled.label`
  font-family: 'GowunDodum';

  padding-left: 3rem;

  color: #eeeeee;

  &:hover {
    color: #ffd369;
  }
`;

export const H1Label = styled(Label)`
  font-size: 5rem;
`;
