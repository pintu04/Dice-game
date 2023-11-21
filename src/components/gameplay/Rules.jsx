import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className='text'>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on dice if selected number is equal to dice number you will get same point as dice {""}</p>
            <p>if you get wrong guess then 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
max-width:800px;
background-color: #B2C8BA;
padding:20px;
margin: 0 auto;
margin-top: 10px;
border-radius: 10px;

h2 {
    font-size: 1.20rem;
    color:black;
}

.text {
    margin-top:10px;
    font-size:0.75rem;
    color:black;
    font-weight: 600
}

`;
