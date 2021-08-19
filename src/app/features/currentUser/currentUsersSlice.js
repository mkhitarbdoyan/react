import {loadCurrentUsers} from "./currenUserApi"
export function createUserReducer(state = {}, action) {
    if (action.type === "edit-current-user-name") {
        return {
            ...state,
            name: action.payload.name,
        }
    }
    return state
}

export const initalCurrentUser = {
    name: "poxos poxosyan"
}

export function selectName(state) {
    return state.currentUser.name;
}
export function newName(newName) {
    return {

        type: "edit-current-user-name",
        payload: {
            name: newName

        }

    }
}
// export function loadUser() {
//     return (dispatch, getState) = {
//         return loadCurrentUsers().then((loadUser) => {
//             dispatch(newName(loadUser.name))
//         })
//     }
// }