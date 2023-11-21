import styled from "styled-components";
// import { useState } from "react";


const Rolldice = ({rollDice, currentDice}) => {
    return (
        <DiceContainer>
            <div className="Dice"
            onClick={rollDice}
            >
                  <img src={`/images/dice/dice0${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to roll</p>

        </DiceContainer>
    )
}

export default Rolldice;

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
justify-content: center;
align-items:center;
flex-direction:column;

img {
    width: 8rem;
    height:8rem;
}

.Dice {
  cursor:pointer;
}

p{
    font-size: 18px;
    font-weight:600;
}


`;
