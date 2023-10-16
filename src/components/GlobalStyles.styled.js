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

h1{  
  text-decoration: none;
  font-weight: 700;
  color: #2e2f42;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-bottom: 0;

  color: rgb(34, 0, 186);}

#root{
    display: flex;
    flex-direction: column;
}
`;
