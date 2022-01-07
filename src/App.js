import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';

export const App = () => {
  const [activeButton, setActiveButton] = useState(true);

  const handleButtonActiveState = () => {
    // when button in upper-content is clicked bool status of activeButton is toggled
    // so that colour and text of button changes
    setActiveButton(!activeButton);
  };

  useEffect(() => {
    console.log('Componente cargado correctamente');
  }, []);

  return (
    <div className="App">
      <div className="upper-content">
        <div>
            {/* dynamically adding 'active' className to change button colour */}
            <button
              className={ `${activeButton ? 'active' : null }` }
              onClick={ handleButtonActiveState }
            >
              { activeButton ? 'Active' : 'Inactive' }
            </button>
          </div>
          <div>
            {/* !activeButton to get opposite effect from first button */}
            <button
              className={ `${!activeButton ? 'active' : null }` }
              onClick={ handleButtonActiveState }
            >
              { !activeButton ? 'Active' : 'Inactive' }
            </button>
          </div>
      </div>
      <div className="lower-content">
        <div className="form">
          <button className="active">ENVIAR</button>
        </div>
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
};
