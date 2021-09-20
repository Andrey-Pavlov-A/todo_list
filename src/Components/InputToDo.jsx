import React from 'react'
import {useFormik} from 'formik'
import s from './InputToDo.module.css'

const InputTodo = (props) => {
	//debugger
	let inputTodo = React.createRef()

	const validate = values => {
		const errors = {}

		if(values.input.length > 10){
			errors.input = 'Must be less than 10 characters'
		}

		return errors
	}
	
	const formControl = useFormik({
		initialValues: {
			input: ''
		},
		validate,
		onSubmit: values => {
			//console.log(values.input)
			if (formControl.values.input != ''){
				props.addTodoAC(formControl.values.input)
				formControl.resetForm()
			}

			
		}
	})

	//console.log(formControl.values)

	const addTodo = () => {
		//props.addTodoAC(formControl.values.input)
	}

	return (
		<div>
			<h1>Todo list</h1>
			<form className={s.formStyle} onSubmit={formControl.handleSubmit}>
				<input className={s.inputField} ref={inputTodo} onChange={formControl.handleChange} value={formControl.values.input} name='input'/>
				<button className={s.buttonStyle} type='submit' onClick={addTodo}>Add task</button>	
			</form>
			{formControl.errors.input ? formControl.errors.input : null}
		</div>
		)
}

export default InputTodo