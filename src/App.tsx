import './App.css';
import './Reset.css';
import './style/font.css';
import { Router } from './router/Router';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router />
      </div>
    </RecoilRoot>
  );
}

export default App;
