//configStore.js
import { createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";

import bucket from "./modules/bucket"; 


const middlewares = [thunk];
const rootReducer = combineReducers({ bucket });
const enhancer = applyMiddleware(...middlewares);


// 스토어를 만듭니다.
const store = createStore(rootReducer,enhancer);

export default store;