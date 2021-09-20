import React from 'react'
import InputTodo from './InputToDo';
import { connect } from 'react-redux';
import { addTodoAC} from '../Redux/to-do-redux';

const mapStateToProps = (state) => {
	return{
		newTask: state.todoPage.newTask
	}
}
const InputTodoContainer = connect(mapStateToProps, {addTodoAC})(InputTodo)
export default InputTodoContainer