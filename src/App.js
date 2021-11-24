import './App.css';
import {Route} from "react-router-dom";
import Dictionary from './Dictionary';
import Addword from './Addword';
import styled from 'styled-components';


function App() {


  return (
    <div className="App">
      <Container>
        <h1>My DICTIONARY</h1>
        <Route path="/" exact>
          <Dictionary/>
        </Route>
        <Route path="/addword">
          <Addword/>
        </Route>
      </Container>
      
    </div>
  );
}
const Container = styled.div`
  max-width : 30vw;
  height : 500px;
  background-color: aliceblue;
  padding: 30px;
  margin: 20px auto;
  border : 1px solid aliceblue;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export default App;
