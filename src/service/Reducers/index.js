import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import authReducer from "./authReducer";

const rootReducer =  combineReducers({
    recipeReducer ,
    authReducer
})

export default rootReducer
