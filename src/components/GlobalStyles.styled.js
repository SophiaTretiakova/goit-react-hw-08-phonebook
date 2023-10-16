import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{  
    padding: 20px 50px;
  background-repeat: no-repeat;
  font-size: larger;
}
ul{
    list-style: circle;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
}
button{
  display: block;
  float: left;
  position: relative;
  text-decoration: none;
  color: #333;
  border: 3px solid rgba(34, 0, 186, 0.6);
  padding: 10px 15px;
  margin: 5px 0px;
  min-width: 75px;
  height: 41px;
}
button:hover{
    background-color:  #ebf8e1;
    color: rgba(34, 0, 186, 0.6);
    font-weight: 700;
}

button:active {
  top: 3px;
  left: 3px;
}

button:active:after{
  top: 2px;
  left: 2px
}

a{
  text-decoration: none;
}

#root{
    display: flex;
    flex-direction: column;
}
`;
