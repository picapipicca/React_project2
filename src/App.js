import React from "react";
import {Route , useHistory} from "react-router-dom";
import Dictionary from './Dictionary';
import Addword from './Addword';
import styled from 'styled-components';
import {db} from "./firebase";
import { collection,getDocs,addDoc,updateDoc,doc ,deleteDoc} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { loadBucketFB } from "./redux/modules/bucket";


function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [list,setList] = React.useState ([
    {word: "개발자",explain :"코딩하는사람",etc:"임민영 튜터님"},
    {word: "커피",explain :"이탈리아에서 기원했다",etc:"스타벅스"},
    ]);
  
    React.useEffect( () => {
    dispatch(loadBucketFB());
  }, []);

       // 정보삭제하기
      // const docRef = doc(db,"bucket","mEnM5YxMNKAr6JAFeKIJ");
      // deleteDoc(docRef);

      // 수정하기 
      // const docRef = doc(db,"bucket","LK4MI2VDY0Wn2rZylsji");
      // updateDoc(docRef,{word:"생선"});


     //새로운거추가하기 
    //  addDoc(collection(db,"bucket"),{word:"new",explain:"설명",etc:"addDoc"});

      //도큐먼트 가져오기
      //  const query = await getDocs(collection(db,"bucket"));
      // console.log(query);
      // query.forEach((doc)=>{
      //    console.log(doc.id,doc.data());
      // });

    

  return (
    <div className="App">
      <Container>
        <h1 style ={{textAlign : "center",width:"30vw",}}>My DICTIONARY</h1>
        <Route path="/" exact>
          <Dictionary list={list}/>
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
export default App;
