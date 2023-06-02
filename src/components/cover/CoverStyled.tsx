import styled, { keyframes } from 'styled-components';

const Open = keyframes`
  0% {
    opacity: 0;
  } 
	85% {
		opacity: 1;
  }
`;

export const Layout = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;

  animation: ${Open} 3s ease;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  user-select: none;

  &:hover {
    color: #ffd369;
  }
`;

export const TitleBox = styled(Box)`
  flex: 1;

  padding-bottom: 6rem;
`;

export const Title = styled(Span)`
  font-family: 'Anton';
  font-size: 10rem;

  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }
`;

export const SubTitle = styled(Span)`
  font-family: 'Alkatra';
  font-size: 1.1rem;
`;
