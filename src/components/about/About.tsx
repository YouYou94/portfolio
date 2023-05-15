import { useEffect, useState } from 'react';
import { Box, Title, AboutLabel } from './AboutStyled';

type AboutProps = {
  textList: Array<string>;
};

export const About = ({ textList }: AboutProps) => {
  const [word, setWord] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const completionWord = '안녕하세요. 프론트엔드 개발자 유병현입니다.';

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(word + completionWord[count]);
      setCount(count + 1);
    }, 200);
    if (count === completionWord.length) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box>
      <Title>{word}</Title>
      {count === completionWord.length ? (
        <>
          {textList?.map((text, index) => {
            return <AboutLabel key={index}>{text}</AboutLabel>;
          })}
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};
