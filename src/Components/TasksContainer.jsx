import React from 'react'
import { connect } from 'react-redux';
import Tasks from './Tasks';
import { removeTodo, doneTask, unDoneTask, deleteAll, doneAll } from '../Redux/to-do-redux';
const mapStateToProps = (state) => {
	return{
		tasks: state.todoPage.tasks
	}
}

const TasksContainer = connect(mapStateToProps, {removeTodo, doneTask, unDoneTask, deleteAll, doneAll})(Tasks)

export default TasksContainer