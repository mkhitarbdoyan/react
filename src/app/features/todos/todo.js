export function todosReducer(state = [], action) {
    if (action.type === "todo-add") {
        return [
            ...state,
            {
                id: Math.random(),
                text: "asfs",
                isComment: true
            }
        ]
    }
    return state
}

export const initalTodo= [
    {
        id: Math.random(),
        text: "asfs",
        isComment: true
    },
    {
        id: Math.random(),
        text: "aqwesfs",
        isComment: true
    }


]
