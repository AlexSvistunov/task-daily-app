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
import { HashLoader } from "react-spinners";

import "./TaskList.css";

const TaskList = ({ showListHandler, currentDate, index, setIndex }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState(null);

  const { email, token } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos(token));
  }, []);

  const todos = useSelector((state) => state.todos.todoList);
  const isLoading = useSelector((state) => state.todos.isLoading);
  console.log(isLoading);
  const todosForDate =
    todos &&
    todos.filter((el) => el["day"] === currentDate.toLocaleDateString());

  if (isLoading) {
    return (
      <section
        className="task-list"
        style={{
          margin: "200px auto",
          height: "200px",
          width: "200px",
        }}
      >
        <HashLoader color="#CA87F4" size={150} />
      </section>
    );
  }

  // не просто useState чтобы был isDone, так как все изменятся...

  return (
    <section className="task-list">
      <ul className="tasks-list">
        {todosForDate.length ? (
          todosForDate.map((el) => (
            <li
              key={el.title}
              className="tasks-list__task list-task"
              style={{ backgroundColor: el.color }}
              onClick={(e) => {
                if (e.target.tagName !== "INPUT") {
                  setModalIsOpen(true);
                  setDataModal(el);
                }
              }}
            >
              <input className="list-task__checkbox" type="checkbox"></input>
              <span className="list-task__title">{el.title}</span>
            </li>
          ))
        ) : (
          <img
            src="src/assets/images/nothing-here.png"
            style={{ display: "block", margin: "200px auto" }}
          ></img>
        )}
      </ul>

      <button className="task-list__btn" onClick={showListHandler}>
        <span className="material-symbols-outlined">add_task</span>
      </button>

      {modalIsOpen && (
        <TaskModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          dataModal={dataModal}
          setDataModal={setDataModal}
          index={index}
          setIndex={setIndex}
        />
      )}
    </section>
  );
};

export default TaskList;
