import { createStore } from 'redux';

/** Initial Redux State  */
const initialState = {
    todos: []
}


/**
 * Making perform reducer to create redux store
 *
 * @param - {obj} state
 * @param - {payload/obj} param
 */
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            let newTodos = state.todos;
            newTodos.push(action.payload);
            return {
                ...state,
                todos: newTodos
            }
        case 'DELETE_TODO':
            let filteredTodos = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: filteredTodos
            }
        case 'UPDATE_TODO':
            let { id, title, description, projectType, assignTo } = action.payload
            let updatedTodos = state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        id: id,
                        title,
                        description,
                        projectType,
                        assignTo
                    }
                } else {
                    return {
                        id: todo.id,
                        title: todo.title,
                        description: todo.description,
                        projectType: todo.projectType,
                        assignTo: todo.assignTo
                    }
                }
            });
            return {
                ...state,
                todos: updatedTodos
            }
        default:
            return state
    }
}


/** Making perform loadState form localStorage */
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


/** Making perform saveState to localStorage */
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err);
    }
};



const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(() => {
    saveState({ ...store.getState() });
});

export default store