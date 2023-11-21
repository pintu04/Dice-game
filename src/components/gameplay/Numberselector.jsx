// import React, { useState } from 'react'
import styled from 'styled-components';


const Numberselector = ({ error, selectedNumber, setSelectedNumber, setError }) => {
    const arrayNumber = [1, 2, 3, 4, 5, 6]

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arrayNumber.map((value, i) => (
                    <Box key={i}
                        isSelected={value === selectedNumber}
                        onClick={() => numberSelectorHandler(value)}
                    >{value}</Box>
                ))}
            </div>
            <p className='errorr'>Select Number</p>

        </NumberSelectorContainer>
    )
}

export default Numberselector;

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction:column;
align-items: end;

@media (max-width: 500px) {
   .flex {
    flex-wrap: Wrap;
    padding-left:5rem;
   }
   .errorr {
    margin-top: 5px;
    margin-left: 3rem;
   }

  }

.flex {
display: flex;
gap:15px;

}
.error {
    color: red;
}
p {
    font-weight: 600;
}
`;

const Box = styled.div`
   border-radius:3px;
   height:62px;
   width:62px;
   display:grid;
   place-items:center;
   font-size:24px;
   font-weight:700;
   border:2px solid black; 
   background-color: ${(props) => (props.isSelected ? "black" : "white")};
   color: ${(props) => (!props.isSelected ? "black" : "white")};
   cursor: pointer;

   &:hover{

    background-color: black;
    color: white;
    border: none;
   }   
   
`;
