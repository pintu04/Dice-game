
import React from 'react';
import { useState } from 'react';

import Startgame from "./components/startgame/Startgame"
import Gameplay from './components/gameplay/Gameplay';
const App = () => {
  const[isGameStarted, setGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev)
  };
  return (
    <>
      {isGameStarted ? <Gameplay /> : <Startgame toggle={toggleGamePlay} />}
      
    </>

  );
}

export default App;

