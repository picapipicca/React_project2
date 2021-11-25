//bucket.js
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import {db} from "../../firebase";

// Actions
const LOAD   = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';


const initialState = {
  list : [
    {word: "개발자",explain :"코딩하는사람",etc:"임민영 튜터님"},
    {word: "커피",explain :"이탈리아에서 기원했다",etc:"스타벅스"},
    {word: "커피체인점",explain :"커피가 맛있다",etc:"이디야"},
    ],
};

// Action Creators
export const loadBucket = (bucket_list)=> {
  return { type: LOAD , bucket_list};
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};

export function deleteBucket(bucket_index){
  console.log("지울 버컷 인덱스",bucket_index);
  return {type:DELETE,bucket_index};
}

// export const updateBucket(bucket_index) {
//   return {type:UPDATE,bucket_index};
// }

//middlewares
// 파이어베이스랑 통신하는 부분
export const loadBucketFB = () => {
  return async function (dispatch) {
    // 데이터를 가져와요!
    const bucket_data = await getDocs(collection(db, "bucket"));
    console.log(bucket_data);
    let bucket_list  = [];

    // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
    bucket_data.forEach((b) => {
      // 콘솔로 확인해요!
      console.log(b.data());
      bucket_list.push({id:b.id,...b.data()});
    });
    console.log(bucket_list);
    
    dispatch(loadBucket(bucket_list));
  };
};
export const addBucketFB = (bucket) => { 
  return async function (dispatch) {
   const docRef = await addDoc(collection(db,"bucket"),bucket);
  //  const _bucket = await getDoc(docRef);
   const bucket_data = {id:docRef.id,...bucket};
   
    console.log(bucket_data);
 
    dispatch(createBucket(bucket_data));
  };
};
export const deleteBucketFB = (bucket_id) => {
  return async function(dispatch,getState){
    console.log(bucket_id);
    const docRef = await doc(db,"bucket",bucket_id);
    await deleteDoc(docRef);
    console.log(getState().bucket);

    const _bucket_list = getState().bucket.list;

    const bucket_index = _bucket_list.findIndex((b)=>{
      return b.id ===bucket_id;
    });
    dispatch(deleteBucket(bucket_index));
  };
};



// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD":
      return {list:action.bucket_list };

    case "bucket/CREATE":
      const new_bucket_list = [...state.list,action.bucket];
      return { list : new_bucket_list };

    case "bucket/DELETE": {
      console.log(state,action);
      const new_bucket_list = state.list.filter((l,idx) => {
        
        console.log(parseInt(action.bucket_index)== idx,action.bucket_index,idx);
        return parseInt(action.bucket_index) !== idx;
      });
      
      return {list:new_bucket_list};
    };
    default:
      return state;  
  }
}
