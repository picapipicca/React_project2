import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";


const Dictionary = (props) => {

    const history =useHistory();


    
    return(
        <>
            <Card>
                <Contents>
                    <Category>단어</Category>
                    <Word></Word>
                </Contents>
                <Contents>
                    <Category>설명</Category>
                    <Explanation></Explanation>
                </Contents>
                <Contents>
                    <Category>예시</Category>
                    <Example></Example>
                </Contents>
            </Card>
            <Button onClick={()=> {history.push("/addword"); }}>Add words+</Button>
        </>    
    );
}
const Card = styled.div`
  background-color: #fff;
  margin: 0 50px;
  height: 30vh;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
`;
const Contents = styled.div`
  height: 50px;
  border: 1px solid #fff;
  margin-left: 5px;
`;
const Category=styled.h6`
  text-align:left;
  text-decoration: underline;
  margin: 0;
`;
const Word = styled.div`
    color: black;
    font-size: 0.8em;
    text-align: left;
    max-height: 100%;
`;
const Explanation = styled.div`
    color: black;
    font-size: 0.8em;
    text-align: left;
    max-height: 100%;
`;
const Example = styled.div`
    color: #4d8aeb;
    font-size: 0.8em;
    text-align: left;
    max-height: 100%;
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
export default Dictionary;