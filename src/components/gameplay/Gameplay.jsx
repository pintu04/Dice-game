import styled from "styled-components";
import { useState } from "react";
import Numberselector from "./Numberselector";
import Totalscore from "./Totalscore";
import Rolldice from "./Rolldice";
import Rules from "./Rules";
import { OutlineButton, Outlinebutton } from "../../styled/Button";


const Gameplay = () => {
  const [Score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const rollDice = () => {
  if (!selectedNumber){
        setError("You have not selected any number")
        return;
  }

  setError("");
    
     const randomNumber = generateRandomNumber(1, 7);
     setCurrentDice((prev) => randomNumber);


     if(selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
     }else {
      setScore((prev) => prev - 2);
     }

     setSelectedNumber(undefined);

     
    }
    const resetScore = () => {
      setScore(0);
};




  return (
    <MainSection>
      <div className="topSection">
        <Totalscore className="ts" Score={Score}
        />
        <Numberselector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
      </div>
        <Rolldice 
          currentDice={currentDice}
          rollDice={rollDice}
        />

        <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Outlinebutton onClick={() => {setShowRules((prev) => !prev)}}>
        {showRules ? "Hide" : "Show"} rules</Outlinebutton>
          
        </div>
        {showRules && <Rules />}
        
    </MainSection>

  )
}

export default Gameplay;

const MainSection = styled.main`

@media (max-width: 562px) {
  .topSection {
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-right: 2rem;

  }
    .ts {
      align-items: none;

    }

        
    }
.topSection {
  display: flex;
  align-items: end;
  justify-content: space-around;
  padding-top: 70px;
}

.btns {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
}
`;