import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { db } from "./firebase";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { deleteBucket ,deleteBucketFB } from "./redux/modules/bucket";
import {keyframes} from "styled-components";

const Dictionary = (props) => {

    const history =useHistory();
    const dispatch = useDispatch();
    const my_lists = useSelector((state)=> state.bucket.list);
    
    
    return(
        <>
            <ListStyle>
                <p>
                {my_lists.map((list,index)=> {
                    return(
                        <Card>
                            <Contents>
                            <Category>단어</Category>
                            <Word >{list.word}</Word>
                            </Contents>
                            <Contents>
                                <Category>설명</Category>
                                <Explanation>{list.explain}</Explanation>
                            </Contents>
                            <Contents>
                                <Category>예시</Category>
                                <Example>{list.etc}</Example>
                                
                            </Contents>   
                            <button onClick = {() => {
                                console.log("삭제하기 버튼을 눌렀어!")
                                dispatch(deleteBucketFB(list.id));
                            }}>delete</button>             
                        </Card>       
                    );
                    })}
                </p>
            </ListStyle>
            <Button onClick={()=> {history.push("/addword"); }}>Add words+</Button>
        </>    
    );
};
const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
`;
const Card = styled.div`
  padding: 16px;
  background-color: #fff;
  margin: 20px;
  max-width:25vw;
  max-height: 25vh;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  & button {
      cursor: pointer;
      background: #3271a8;
      border: 1px solid #3271a8;
      width: 50px;
      margin-left: 80%;
      border-radius: 35px;
      color: white;
      margin-bottom: -5px;
  }
   &:hover {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
      }  

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
  cursor: pointer;
  border:transparent;
  &:hover {
       color : #fff;
       background: #5292eb;
       box-shadow: 0 0 10px #2196f3, 0 0 30px #2196f3, 0 0 60px #2196f3;
      }  
`;

export default Dictionary; 