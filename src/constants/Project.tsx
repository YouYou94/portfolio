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
      'Typescript + React + Recoil 이용하여 만든 포트폴리오입니다. 현재까지 사용했던 기술을 적용해보며 복습할 수 있는 경험이 되었습니다.',
    link: {
      github: 'https://github.com/YouYou94/portfolio',
      demo: 'http://YouYou94.github.io/portfolio/',
    },
    techstack: 'Typescript | React | Recoil | Styled-Components',
    mainfunction: ['다크모드 기능'],
    developmentcontent: [],
    isReadme: false,
  },
  {
    id: 1,
    ui: MEMOAPP,
    title: 'Memo App',
    subtitle: '오프라인 메모 앱',
    role: '개인프로젝트',
    about:
      'Typescript를 사용하여 만든 첫 프로젝트이자 오프라인 정보를 기록할 수 있는 간편한 메모 앱입니다. 해당 프로젝트를 통해 타입스크립트에 대해서 학습하는 계기가 되었고, 마크다운 문법을 직접 구현해보면서 문자열 검색 알고리즘(naive, KMP) 대해 학습할 수 있었습니다. 또한, Recoil을 이용한 상태 관리를 사용하여 Context API의 불필요한 리렌더링을 극복할 수 있었습니다.',
    link: {
      github: 'https://github.com/YouYou94/new-tap',
      demo: 'http://YouYou94.github.io/off-line-memo-app',
    },
    techstack: 'Typescript | React | Recoil | Styled-Components',
    mainfunction: ['다크모드 기능', '노트 CRUD', '마크다운 문법 변환 기능'],
    developmentcontent: [
      '다크모드 기능 구현 당시 전역 상태 관리 라이브러리인 Context API를 사용하였습니다. 그러나 Context API의 경우 Provider 하위에서 Context를 구독하는 모든 컴포넌트는 Provider의 Value prop이 변경될 때마다 불필요하게 렌더링이 발생했습니다. 이러한 불필요한 렌더링은 성능 이슈가 있다는 것을 알게 되어 해당 단점을 보완한 Recoil로 변경하여 상태 관리를 하였습니다.',
      '타입스크립트를 학습하여 처음 도입한 프로젝트입니다. 타입스크립트를 사용하면서 Button, Input의 onChange, onClick과 같은 이벤트 객체 타입에 대해 공부할 수 있는 계기가 되었습니다. 또한, 컴포넌트로 전달되는 prop에 타입을 지정해 줌으로써 해당 prop이 어떠한 역할을 하는지 미리 예측이 가능하여 에러를 사전에 방지할 수 있다는 장점에 대해 직접 사용해보면서 알게 되었습니다.',
      '자주 사용되는 마크다운 문법을 직접 구현해 보면서 문자열 검색 알고리즘에 대해 공부하였고, 복잡한 문자열에 대한 처리 능력을 향상시켰습니다. 초기에는 우직한(Naive) 문자열 검색법을 이용하여 문자열 하나하나를 비교하는 문자열 알고리즘을 사용하였습니다. 이후, 성능 향상을 위해 알고리즘 교체 중 KMP 알고리즘에 영감을 받아 접두사의 규칙을 찾아내어 마크다운 문법으로 변환하는 알고리즘으로 변경하였습니다.',
    ],
    isReadme: true,
  },
  {
    id: 2,
    ui: BUJOLOG,
    title: 'Bujolog',
    subtitle: '불렛저널로그',
    role: '개인프로젝트',
    about:
      '다이어리를 쓰는 방법의 한 종류로, ‘Bullet’ 이라는 정보의 중요성이나 종류를 표시할 때 쓰는 기호를 사용하여 저널을 작성하는 불렛 저널을 웹에서 이용할 수 있도록 만든 프로젝트입니다. 불렛 저널의 주요 셋업 방법 중 키 설정하기, 먼슬리로그, 데일리로그를 프론트엔드를 구현하였습니다.',
    link: {
      github: 'https://github.com/YouYou94/bujolog',
      demo: 'https://youyou94.github.io/bujolog/',
    },
    techstack:
      'Javascript | React | Redux-Toolkit | Styled-Components | Firebase',
    mainfunction: [
      '사용자 생성 기능',
      '키 설정 CRUD 기능',
      '먼슬리로그 CRUD 기능',
      '데일리로그 CRD 기능',
    ],
    developmentcontent: [
      '다이어리를 쓰는 방법 중 하나인 불렛저널의 주요 셋업 방법 중 키 설정, 먼슬리로그, 데일리로그를 프론트엔드로 구현하였습니다.',
      'Firebase의 Auth 기능을 이용하여 Login/Logout을 구현하였습니다. 이후 리펙터링 과정(23. 01. 05)을 거치면서 크롬 앱의 모멘텀처럼 개인이 사용하는 방식으로, 기존의 ID/PW 로그인에서 LocalStorage에 사용자의 정보를 저장하여 간단히 사용도록 변경하였습니다.',
      '불렛저널의 주요 셋업 방식인 키 설정, 먼슬리로그, 데일리로그의 CRUD 기능을 구현하였습니다. 해당 과정을 통해 map 함수를 이용한 반복적인 컴포넌트를 생성하는 방법을 알게 되었습니다. 또한, map 함수 key prop에 index 값을 줄 경우 CRUD 기능에 문제가 생길 수 있는 것을 알게 되어 무작위 고유 식별자를 생성하는 라이브러리인 nanoid를 사용하였습니다.',
      '초기에는 props drilling 문제와 CRUD 기능을 내장하는 컴포넌트가 복잡하다고 생각하여 Redux를 사용하게 되었습니다. 리펙터링 과정을 거치면서(23. 01. 05 ~) 해당 문제가 생기지 않아 간단히 useState 훅을 이용하여 상태 관리가 가능하다고 생각했습니다. 그러나 Redux에 대해 이해하고 공부하려는 목적으로 해당 라이브러리를 사용하였습니다.',
      '리펙터링 과정에서 Container-Presenter 패턴을 사용하여 컴포넌트를 작성하였습니다. 동작과 로직이 있는 Container와 사용자가 조작하는 마크업 구조를 가진 Presenter로 나누었습니다. 이를 통해 Container-Presenter 패턴의 사용법에 대해 학습하고, 코드의 구조를 쉽게 이해할 수 있다는 장점을 알게 되었습니다.',
    ],
    troubleShooting: [
      'styled-components를 이용하여 @font-face 를 사용할 경우, 리렌더링 발생 시 지정한 폰트로 변환되는 과정에서 폰트 깜빡임 현상(FOUT: Flash of Unstlyed Font)이 일어나는 문제를 발견하였습니다.\n이러한 현상은 사용자의 UX에 좋지 않은 영향을 끼친다고 생각하였고, 구글링을 통해 styled-components 자체의 문제라는 것을 알게 되었습니다.\n그래서 styled-components와 폰트 관련 CSS를 따로 분리하여 설정하니 문제를 해결했습니다.',
    ],
    isReadme: true,
  },
  {
    id: 3,
    ui: ORDERAPP,
    title: 'Order App',
    subtitle: '배달 앱 주문페이지',
    role: '개인프로젝트',
    about:
      '리액트를 사용하여 진행한 첫 프로젝트입니다. 현업에 종사하는 선배의 도움을 구하여, 사용자의 요구사항 및 Figma를 전달 받아 배달 앱의 주문페이지 부분을 구현하였으며, 각 브랜치 별로 pull request를 요청해 피드백을 받아 저의 프론트엔드 개발에 대해 부족한 점을 보완하고 한층 성장할 수 있었던 계기가 된 프로젝트입니다.',
    link: {
      github: 'https://github.com/YouYou94/order-app',
      demo: 'https://youyou94.github.io/order-app/',
    },
    techstack: 'Javascript | React | Context | Styled-Components',
    mainfunction: [
      '주문자 상세 주소 및 전화번호 변경',
      '주문 요청 사항 선택',
      '주문 요청 사항 직접 입력',
      '결제 수단 선택',
      '할인 수단 쿠폰 선택',
      '할인 수단 포인트 사용',
      '결제하기',
    ],
    developmentcontent: [
      '주어진 사용자 요구사항에 충족하고, Figma에 맞게 프론트엔드를 구현하였습니다.',
      'Figma를 통해 Button, Label, Input 등 재사용이 가능한 컴포넌트 유무를 체크하여, 각각의 컴포넌트를 만들어 재사용하였습니다.',
      '주어진 API 명세서에 따라 API를 연동하여 사용자 및 쿠폰 데이터를 사용하였습니다. 이 과정에서 async/await를 이용하여 API를 연동하였습니다.',
      '컴포넌트의 깊이가 깊어질수록 발생할 수 있는 props drilling의 문제를 방지하기 위해 전역 상태 관리 라이브러리인 Context API 를 사용하였습니다.',
      '사용자의 요구사항에 따라 포인트 컴포넌트에서 포인트 입력 기능에 대해 숫자만 입력이 가능하고, 입력 포인트가 보유 포인트보다 적게, 보유 포인트가 결제 금액보다 적게 입력이 되도록 유효성 검사를 진행하였습니다.',
      '컴포넌트 별로 브랜치를 생성하여 코드를 구현하고 pull request를 요청하였고, pr을 통해 코드 리뷰를 받아 코드 중복을 최소화하였습니다. 또한, CSS 기술 피드백을 받아 Figma와 동일한 ui를 구현하였습니다. pr을 요청하고 리뷰를 받는 과정을 통해 한층 성장할 수 있었던 계기가 되었습니다.',
    ],
    troubleShooting: [
      '브라우저 새로고침 시 useState 훅을 통해 관리하던 사용자의 데이터가 초기화 되어 브라우저에 렌더링하는 과정에서 사용자의 정보가 없어 오류로 인해 페이지가 렌더링되지 않는 문제를 겪었습니다.\n문제를 확인해보니 초기 API를 연동하는 과정에서 API 연동이 완료되지 않아 브라우저가 새로고침되면 렌더링해야 하는 사용자의 정보가 아직 존재하지 않기 때문에 발생한 오류였습니다.\n해당 문제를 조건부 렌더링을 통해 API 연동이 완료되었을 경우에만 컴포넌트를 렌더링하여 문제를 해결하였습니다.\n이후 코드 중복을 최소화하고 리펙터링하는 과정(22. 12. 26)에서 서버가 연결되지 않아 API 연동에 문제가 생길 것을 대비하기 위해 default user 더미 데이터를 하드 코딩해서 추가하여 서버가 연결되지 않아도 페이지가 렌더링될 수 있도록 변경하였습니다.',
    ],
    isReadme: true,
  },
];
