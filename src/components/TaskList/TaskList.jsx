
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../../store/slices/todoSlice";
import { useAuth } from "../../hooks/use-auth";
const TaskList = () => {

  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch()
  const { email } = useAuth();

  useEffect(() => {
    dispatch(getTodos(email));
  }, []);

  // useEffect(() => {
  //   dispatch(getTodos(email));
  // }, [userData]);
  
  console.log(todos);
  return (
    <section className="task-list">
      <ul className="tasks">
      
        {todos?.todos?.length && todos?.todos.map((el) => (
          <li key={el.title} className="task">
          <input className="task__checkbox" type='checkbox'></input>
          <span>{el.title}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TaskList