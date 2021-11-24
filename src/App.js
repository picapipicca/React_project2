import React from "react";
import {Route , useHistory} from "react-router-dom";
import Dictionary from './Dictionary';
import Addword from './Addword';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";


function App() {
  const history = useHistory();
  const [list,setList] = React.useState ([
    {word: "개발자",explain :"코딩하는사람",etc:"임민영 튜터님"},
    {word: "커피",explain :"이탈리아에서 기원했다",etc:"스타벅스"},
    ]);

  return (
    <div className="App">
      <Container>
        <h1 style ={{textAlign : "center",}}>My DICTIONARY</h1>
        <Route path="/" exact>
          <Dictionary list={list}/>
        </Route>
        <Route path="/addword">
          <Addword/>
        </Route>
        <Button onClick={()=> {history.push("/addword"); }}>Add words+</Button>
      </Container>
      
    </div>
  );
}
const Container = styled.div`
  max-width : 30vw;
  height : 90vh;
  background-color: aliceblue;
  padding: 10px;
  margin: 20px auto;
  border : 1px solid aliceblue;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  background: repeating-linear-gradient( white 0px, lightblue 100px);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: fixed; 
  bottom: 30px; 
  right: 270px;
  border:transparent;
  
`;
export default App;
