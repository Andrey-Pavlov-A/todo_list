import React from 'react'
import s from './Tasks.module.css'
const TaskElement = (props) => {
	//debugger
	const removeTodo = () => {
		props.remove(props.id)
	}

	const doneTodo = () => {
		props.active ? props.done(props.id) : props.undone(props.id)
	}
	return(
		<div className={`${s.TaskDiv} `}>
			<div className={`${s.taskContainer} ${props.active ? null : s.notActiveTask} ${props.isDeleted ? s.deleted : null}`}>
				<p className={`${s.liStyle} ${props.active ? null : s.notActiveEl}`}>
					{props.text}
				</p>
				<div className={s.buttonContainer}>
					<button className={s.button1} onClick={doneTodo}>✔</button>
					<button className={s.button2} onClick={removeTodo}>❌</button>
				</div>
			</div>
		</div>
		)
}

const Tasks = (props) => {
	//debugger
	let TaskElements = props.tasks.map(el => <TaskElement   tasks={props.tasks} done={props.doneTask}
								 remove={props.removeTodo} id={el.id} text={el.text}
								  active={el.active} isDeleted={el.isDeleted} undone={props.unDoneTask} />)

	const deleteAll = () => {
		props.deleteAll()
	}

	const doneAll = () => {
		props.doneAll()
	}
	return(
		<div className={s.taskBlock}>
			{TaskElements}
			<button onClick={deleteAll}>Delete All</button>
			<button onClick={doneAll}>Done All</button>
		</div>
	)
}

export default Tasks