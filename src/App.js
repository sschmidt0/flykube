import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';

export const App = () => {
  const [activeButton, setActiveButton] = useState(true);
  const [inputText, setInputText] = useState('');
  const [letterA, setLetterA] = useState(false);

  const handleButtonActiveState = () => {
    // when button in upper-content is clicked bool status of activeButton is toggled
    // so that colour and text of button changes
    setActiveButton(!activeButton);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // print input text to console
    console.log(inputText);
  };

  useEffect(() => {
    console.log('Componente cargado correctamente');
  }, []);

  useEffect(() => {
    // check if string inputText contains letter a each time inputText changes
    // and save bool in letterA
    setLetterA(inputText.toLowerCase().includes('a'));
  }, [inputText]);

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
          <form noValidate onSubmit={ handleSubmit }>
            <input
              type="text"
              name="text"
              value={ inputText }
              onChange={ (e) => setInputText(e.target.value) }
              // dynamically adding className coloured if inputText contains letter a/A
              className={ `${letterA ? 'coloured' : null }` }
            />
            <button type="submit" className="active">ENVIAR</button>
          </form>
        </div>
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
};
