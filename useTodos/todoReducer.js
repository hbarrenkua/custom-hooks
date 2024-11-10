export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'ABC':
            throw new Error('Action.type = ABC no está implementada');
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
             return initialState.map(todo =>( (todo.id==action.payload)?{...todo,done:!todo.done}: todo))

        case '[TODO] Add Todo':
            return [
                ...initialState,
                action.payload
            ]
        default:
            return initialState


    }

}