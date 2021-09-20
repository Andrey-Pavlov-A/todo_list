const ADD_TO_DO = 'ADD-TO-DO'
const UPDATE_TO_DO = 'UPDATE-TO-DO'
const REMOVE_TODO = 'REMOVE-TODO'
const DONE_TASK = 'DONE-TASK'
const UNDONE_TASK = 'UNDONE-TASK'
const DELETE_ALL = 'DELETE-ALL'
const DONE_ALL = 'DONE-ALL'

const initState = {
	tasks: [],
	newTask: ''
}

const appTodoReducer = (state = initState, action) => {
	switch (action.type){
		case ADD_TO_DO:
			let newTodo = action.newTask;
			let idInc = 0;
			//for (let i in state.tasks){
			//	debugger
			//	idInc = state.tasks.indexOf(i)
			//	if(state.tasks.id === )
			//}
			for(let i = 0; i < state.tasks.length; i++){
				idInc++
				for(let i in state.tasks){
					//debugger
					state.tasks.map(el => {
						if (el.id === idInc){
							idInc++
						}
					})
				}
			}
			return{
				...state,
				tasks: [...state.tasks, {id: idInc, text: newTodo, active: true, isDeleted: false}]
			}
		case REMOVE_TODO:
			return{
				...state,
				tasks: state.tasks.map(el =>{
					//debugger
					if (el.id === action.idTodo){
						return {...el, isDeleted: true}
					}
					return el
				}),
				tasks: state.tasks.filter(item => item.id !== action.idTodo)
			}
		case DONE_TASK:
			return{
				...state,
				tasks: state.tasks.map(el => {
					//debugger
						if (el.id === action.idTodo){
							return {...el, active: false}
						}
						return el
				})
			}
		case UNDONE_TASK:
			return{
				...state,
				tasks: state.tasks.map(el => {
					//debugger
					if (el.id === action.idTodo){
						return {...el, active: true}
					}
					return el
				})
			}
		case DELETE_ALL:
			return{
				...state,
				tasks: []
			}
		case DONE_ALL:
			return{
				...state,
				tasks: state.tasks.map(el => {
					return {...el, active:false}
				})
			}
		default:
			return state
	}
}

export const addTodoAC = (newTask) => {
	return {
		type: ADD_TO_DO,
		newTask
	}
}

export const removeTodo = (idTodo) => {
	return{
		type: REMOVE_TODO,
		idTodo
	}
}

export const doneTask = (idTodo) => {
	return{
		type: DONE_TASK,
		idTodo
	}
}
export const unDoneTask = (idTodo) => {
	return{
		type: UNDONE_TASK,
		idTodo
	}
}

export const deleteAll = () => {
	return{
		type: DELETE_ALL
	}
}

export const doneAll = () => {
	return{
		type: DONE_ALL
	}
}



export default appTodoReducer