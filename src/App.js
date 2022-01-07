import logo from './logo.svg';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <div className="upper-content">buttons</div>
      <div className="lower-content">
        <div className="form">form</div>
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
};
