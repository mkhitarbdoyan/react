import { applyMiddleware, combineReducers, createStore } from "redux";
import {createUserReducer,initalCurrentUser} from "../app/features/currentUser/currentUsersSlice"
import {initalTodo,todosReducer}from "../app/features//todos/todo"

function logger(store) {
    return function (next) {
        return function (action) {
            console.log("ok    ");
            return next(action);
        }
    }
}

const store = createStore(combineReducers({
    todos: todosReducer,
    currentUser: createUserReducer
}), {
    todo: initalTodo,
    currentUser: initalCurrentUser
},applyMiddleware(logger))
    
 export default store