import PORTFOLIO from '../assets/project/portfolio.png';
import MEMOAPP from '../assets/project/memoapp.png';
import BUJOLOG from '../assets/project/bujologapp.png';
import ORDERAPP from '../assets/project/orderapp.png';

export const ProjectList = [
  {
    id: 0,
    ui: PORTFOLIO,
    title: 'Portfolio',
    subtitle: '유병현 포트폴리오',
    role: '개인프로젝트',
    about:
      'TypeScript + React + Recoil 이용하여 만든 포트폴리오입니다. 현재까지 사용했던 기술을 적용하고, 기능을 구현해보며 복습할 수 있었던 경험이 되었습니다.',
    link: {
      github: 'https://github.com/YouYou94/portfolio',
      demo: 'http://YouYou94.github.io/portfolio/',
      detail: 'portfolio',
    },
    techstack: 'TypeScript | React | Recoil | Styled-Components',
  },
  {
    id: 1,
    ui: MEMOAPP,
    title: 'Memo App',
    subtitle: '오프라인 메모 앱',
    role: '개인프로젝트',
    about:
      '오프라인에서 메모를 저장할 수 있는 간편한 웹페이지입니다. 해당 프로젝트를 통해 Typescript, Recoil 기술을 학습할 수 있는 계기가 되었습니다.',
    link: {
      github: 'https://github.com/YouYou94/new-tap',
      demo: 'http://YouYou94.github.io/off-line-memo-app',
      detail: 'memoapp',
    },
    techstack: 'TypeScript | React | Recoil | Styled-Components',
  },
  {
    id: 2,
    ui: BUJOLOG,
    title: 'Bujolog',
    subtitle: '불렛저널로그',
    role: '개인프로젝트',
    about:
      '‘Bullet’ 이라는 정보의 중요성이나 종류를 표시할 때 쓰는 기호를 사용하여 저널을 작성하는 불렛저널 웹페이지입니다. ',
    link: {
      github: 'https://github.com/YouYou94/bujolog',
      demo: 'https://youyou94.github.io/bujolog/',
      detail: 'bujolog',
    },
    techstack:
      'JavaScript | React | Redux-Toolkit | Styled-Components | FireBase',
  },
  {
    id: 3,
    ui: ORDERAPP,
    title: 'Order App',
    subtitle: '배달 앱 주문페이지',
    role: '개인프로젝트',
    about:
      '리액트를 사용하여 진행한 첫 프로젝트입니다. 사용자의 요구사항 및 Figma에 맞게 프론트엔드를 구현하였으며, 한층 성장할 수 있었던 계기가 된 프로젝트입니다.',
    link: {
      github: 'https://github.com/YouYou94/order-app',
      demo: 'https://youyou94.github.io/order-app/',
      detail: 'orderapp',
    },
    techstack: 'JavaScript | React | Context | Styled-Components',
  },
];
