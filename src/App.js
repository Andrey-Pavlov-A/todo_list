import logo from './logo.svg';
import s from './App.module.css';
import InputTodoContainer from './Components/InputToDoContainer'
import TasksContainer from './Components/TasksContainer'

const App = (props) => {
  return (
    <div className={s.App}>
    	<div className={s.myApp}>
	    	<InputTodoContainer />
	      	<TasksContainer />
    	</div>
    </div>
  );
}

export default App;
