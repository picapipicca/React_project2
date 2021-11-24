//bucket.js

// Actions
const LOAD   = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const initialState = {
  list : [
    {word: "개발자",explain :"코딩하는사람",etc:"임민영 튜터님"},
    {word: "커피",explain :"이탈리아에서 기원했다",etc:"스타벅스"},
    {word: "커피체인점",explain :"커피가 맛있다",etc:"이디야"},
    ],
};

// Action Creators
export const loadBucket = (bucket)=> {
  return { type: LOAD , bucket };
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD":
      return state;
    case "bucket/CREATE":
      const new_bucket_list = [...state.list,action.bucket];
      return { list : new_bucket_list };

    default:
      return state;  
  }
}
