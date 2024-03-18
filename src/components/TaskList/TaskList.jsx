import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../../store/slices/todoSlice";
import { useAuth } from "../../hooks/use-auth";
import TaskModal from "../TaskModal/TaskModal";
import { useState } from "react";
import { get } from "firebase/database";
import { ref } from "firebase/database";
import { getDatabase } from "firebase/database";
import { child } from "firebase/database";

import "./TaskList.css";

const TaskList = ({showListHandler, currentDate, index, setIndex}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [dataModal, setDataModal] = useState(null)

  const { email, token } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos(token));
  }, []);

  const check = async () => {
    const dbRef = ref(getDatabase());
    try {
      const snapshot = await get(child(dbRef, `users/${token}`));
      if (snapshot.exists()) {

        if (typeof snapshot.val() === 'object' && snapshot.val() !== null && !Array.isArray(snapshot.val())) {
          console.log('ОБЪЕКТ!!!');
          console.log(Object.values(snapshot.val()));
        }
  
        if (Array.isArray(snapshot.val())) {
          console.log('МАССИВ!!!');
          console.log(snapshot.val());
         
        }
        
        console.log(snapshot.val());
        return snapshot.val()
      // if (snapshot.exists()) {
        
      // console.log(snapshot.val());
      //  return snapshot.val()

      // } else {
      //   console.log("No data available");
      //   return [];
      // }
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  const todos = useSelector((state) => state.todos.todoList)
  console.log(todos);
  const todosForDate = todos && todos.filter((el) => el['day'] === currentDate.toLocaleDateString())
  console.log(todosForDate);

  return (
    <section className="task-list">
      <ul className="tasks-list">
        {todosForDate.length ? 
          todosForDate.map((el) => (
            <li key={el.title} className="tasks-list__task list-task" style={{backgroundColor: el.color}} onClick={() => {
              setModalIsOpen(true)
              setDataModal(el)
            }}>
              <input className="list-task__checkbox" type="checkbox"></input>
              <span className='list-task__title'>{el.title}</span>
            </li>
          )) : <img src="src/assets/images/nothing-here.png" style={{display: 'block', margin: '200px auto'}}></img>}
      </ul>

      <button className="task-list__btn" onClick={showListHandler}>
        <span className="material-symbols-outlined">add_task</span>
      </button>

      <button onClick={check}>sdfsdf</button>

      {modalIsOpen && <TaskModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} dataModal={dataModal} setDataModal={setDataModal} index={index}
        setIndex={setIndex}/>}
    </section>

    


  );
};

export default TaskList;
