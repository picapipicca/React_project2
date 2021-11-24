import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Dictionary = (props) => {

    const history =useHistory();
    const my_lists = useSelector((state)=> state.bucket.list);
        
    return(
        <>
            <ListStyle>
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
                        </Card>       
                    );
                    })}
                
            </ListStyle>
                
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
  margin: 8px;
  max-width:25vw;
  max-height: 100px;
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

export default Dictionary;