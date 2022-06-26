import {legacy_createStore,combineReducers} from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { todoReducer } from "./Todos/todos.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer ,
})
export const store = legacy_createStore(rootReducer) 