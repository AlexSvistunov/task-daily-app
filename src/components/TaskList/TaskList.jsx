import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../../store/slices/todoSlice";
import { useAuth } from "../../hooks/use-auth";

import "./TaskList.css";

const TaskList = ({showListHandler, currentDay}) => {

  const todos = useSelector((state) => state.todos.todoList);
  console.log(todos);
  const todosForDate = todos?.todos?.filter((el) => el['day'] === currentDay.toLocaleDateString())
  const dispatch = useDispatch();
  const { email } = useAuth();

  useEffect(() => {
    dispatch(getTodos(email));
  }, []);

  return (
    <section className="task-list">
      <ul className="tasks-list">
        {todosForDate?.length ? 
          todosForDate.map((el) => (
            <li key={el.title} className="tasks-list__task list-task" style={{backgroundColor: el.color}}>
              <input className="list-task__checkbox" type="checkbox"></input>
              <span className='list-task__title'>{el.title}</span>
            </li>
          )) : <img src="src/assets/images/nothing-here.png" style={{display: 'block', margin: '200px auto'}}></img>}
      </ul>

      <button className="task-list__btn" onClick={showListHandler}>
        <span className="material-symbols-outlined">add_task</span>
      </button>
    </section>
  );
};

export default TaskList;
