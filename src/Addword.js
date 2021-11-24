import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Addword = (props) => {

    const history = useHistory();
    const word = React.useRef();
    const explain = React.useRef();
    const etc = React.useRef();

    return(
                <>
                    <h2>단어 추가하기</h2>
                    <Box>
                        <Contents>
                            <Category>단어</Category>
                            <Input>
                            <input type="text" ref={word} />
                            </Input>
                        </Contents>
                    </Box>
                    <Box>
                        <Contents>
                            <Category>설명</Category>
                            <Input>
                            <input type="text" ref={explain} />
                            </Input>
                        </Contents>
                    </Box>
                    <Box>
                        <Contents>
                            <Category>예시</Category>
                            <Input>
                            <input type="text" ref={etc} />
                            </Input>
                        </Contents>
                    </Box>
                    <Button onClick = {()=> {
                        history.goBack();
                    }}>추가하기</Button>
                   
     
                </>
                
        );
    }
    
    const Box = styled.div`
      background-color: #fff;
      margin: 10px;
      height: 60px;
      border: 1px solid #fff;
      display: flex;
      flex-direction: column;
    `;
    const Contents = styled.div`
      height: 50px;
      border: 1px solid #fff;
    `;
    const Category=styled.h6`
      text-align:left;
      text-decoration: underline;
      margin: 0;
    `;
   const Input = styled.div`
   background-color: #fff;
   border: 1px solid #fff;
   & input {
    background-color: #fff;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 90%;
   }
   & input:focus {
     outline :none;
     border: 1px solid orange;
   }
   `;
   const Button = styled.button`
    background-color: #5894f5;
    color: #fff;
    width: 25vw;
    height: 35px;
    margin: auto;
    border-radius: 50px;
    border:#5894f5;
   `;
export default Addword;