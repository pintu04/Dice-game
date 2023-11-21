import styled from "styled-components";

export const Button = styled.button`
 color: white;
 background: #000000;
 border: none;
 padding: 8px 14px;
 border-radius: 5px;
 min-width: 200px;
 font-size: 1.75rem;
  border:1px solid transparent;
  transition: 0.3s background ease-out;
  cursor:pointer;
  margin-left: 6px;

 &:hover {
  background-color: white;
  color: black;
  border:1px solid black;
  transition: 0.2s background ease-in;
 }
`;

export const OutlineButton = styled(Button)`
background-color: white;
  border:1px solid black;
color:black;
padding: 2px 6px;
font-size: 1.30rem;
min-width: 180px;
&:hover {
  background-color: black;
  color: white;
  border:1px solid black;
  
 }


`;

export const Outlinebutton = styled(Button)`
  border:1px solid black;
padding: 2px 6px;
font-size: 1.30rem;
min-width: 180px;


`;