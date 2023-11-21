import React from 'react'
import dices from '../../assets/pngegg.png'
import { Button } from '../../styled/Button';

import styled from 'styled-components';
const Startgame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src={dices} alt='' />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>

  )
}

export default Startgame;

const Container = styled.div`
   max-width: 1180px;
   display:flex;
   margin:0 auto;
   align-item:center;
   justify-content: center;
   height:100vh;
   
   

   img {
    width:90vh;
    height:90vh;
    overflow: hidden;
   }

   .content {
    margin-top: 10rem;
    
    h1 {
      font-size: 6rem;
      white-space: nowrap;
    }
   }


   @media (max-width: 1100px) {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
      margin-top:16rem;
      margin-right: 5px:
    }
    .content {
      margin-top:1rem;
      ${'' /* margin-top:1rem; */}
    }
    }

    @media (max-width: 425px) {
      padding-left: 10px;
    }
    @media (max-width: 550px) {
      img {
        width:50vh;
         height:50vh;
         margin-top: 8px;

      }
      .content {
        h1 {

        font-size: 3rem;
        }

      }
    }
`;



