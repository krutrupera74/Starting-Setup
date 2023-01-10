import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Component1 from './components/Demo/Component1';
import NewComponent1 from './components/Demo/ReactContextDemo';


function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle);
  }

  console.log('App is running');


  return (
    <div className="app">
      {/* <h1>Hi there!</h1>
      <h3>Toggle is {allowToggle ? 'ON' : 'OFF'}</h3>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button> */}
      <Component1 />
      <NewComponent1 />
    </div>
  );
}

export default App;
