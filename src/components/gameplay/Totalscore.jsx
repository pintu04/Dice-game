
import styled from "styled-components"
const Totalscore = ({Score}) => {
  return (
    <ScoreContainer>
       <h1>{Score}</h1>
       <p>Total Score</p>

    </ScoreContainer>
    
  )
};

export default Totalscore;

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
h1 {
    font-size: 4.5rem;
    line-height: 4.2rem;
}

p {
    font-size: 1rem;
    font-weight: 600;
}

@media (max-width: 500px) {
  
}
   
`;
