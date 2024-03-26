import { useState } from "react";
// import { addDoc, updateDoc } from "firebase/firestore";
// import { collection } from "firebase/firestore";
// import { db } from "../../firebase/firebase";
// import { doc } from "firebase/firestore";
// import { setDoc } from "firebase/firestore";
// import { arrayUnion } from "firebase/firestore";
// import { getDoc } from "firebase/firestore";

import { useAuth } from "../../hooks/use-auth";
import { useEffect } from "react";
import { getTodos } from "../../store/slices/todoSlice";

import { getDatabase, ref, set } from "firebase/database";

import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from 'uuid';

import "./CreateTask.css";

// when additing and query is going -> spinner

const CreateTask = ({ currentDate, showListHandler}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [tag, setTag] = useState("");
  const [userData, setUserData] = useState([]);
  const [currentColor, setCurrentColor] = useState(["Фисташковый", "#EDEAEA"]);
  const { email, token } = useAuth();

  useEffect(() => {
    dispatch(getTodos(token));
  }, []);

  const todos = useSelector((state) => state.todos.todoList);
  console.log(todos);

  const addTask = async (title, descr, email, day, color, tag) => {
    
   if(title.length) {
    const currentIndex = uuidv4()
    const db = getDatabase()
    set(ref(db, 'users/' + token + '/' + currentIndex), {
      title,
      descr,
      email,
      day,
      color,
      tag,
      currentIndex,
      done: false,
    })

    dispatch(getTodos(token));
   }

  };

  const setColor = (color) => {
    setCurrentColor(color);
  };

  return (
    <section className="new-task">
      <h1 className="new-task__title">New Task</h1>

      <div className="new-task__fields">
        <div className="new-task__field">
          <input
            className="new-task__input"
            placeholder="Name your new task"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="new-task__field">
          <input
            className="new-task__input"
            placeholder="Describe your new task"
            type="text"
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="new-task__color-picking">
        <h3 className="new-task__color-title">Card Color</h3>
        <div className="new-task__color-picked">
          Your picked color is: <span>{currentColor[0]}</span>
        </div>
      </div>
      <div className="new-task__colors">
        <button
          className={
            currentColor[0] === "Фисташковый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Фисташковый", "#ADF7B6"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25.6829"
              cy="25.6829"
              r="23.2752"
              fill="#ADF7B6"
              fillOpacity="0.6"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Фиолетово-Розовый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Фиолетово-Розовый", "#A817C0"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25.7318"
              cy="25.6829"
              r="23.2752"
              fill="#A817C0"
              fillOpacity="0.6"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Бежевый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Бежевый", "#FFC09F"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25.7806"
              cy="25.6829"
              r="23.2752"
              fill="#FFC09F"
              fillOpacity="0.6"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Голубой"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Голубой", "#B0FFFA"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25.8294"
              cy="25.6829"
              r="23.2752"
              fill="#B0FFFA"
              fillOpacity="0.6"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Желтый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Желтый", "#FCFF52"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25.8782"
              cy="25.6829"
              r="23.2752"
              fill="#FCFF52"
              fillOpacity="0.94"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Зеленый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Зеленый", "#4EFF31"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25.9271"
              cy="25.6829"
              r="23.2752"
              fill="#4EFF31"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Бирюзовый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Бирюзовый", "#5BFFD8"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25.9754"
              cy="25.6829"
              r="23.2752"
              fill="#5BFFD8"
              fillOpacity="0.99"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Синий"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Синий", "#0038FF"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.0242"
              cy="25.6829"
              r="23.2752"
              fill="#0038FF"
              fillOpacity="0.6"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Фиолетовый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Фиолетовый", "#622BFF"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.0731"
              cy="25.6829"
              r="23.2752"
              fill="#622BFF"
              fillOpacity="0.6"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Малиновый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Малиновый", "#D21DFF"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.1219"
              cy="25.6829"
              r="23.2752"
              fill="#D21DFF"
              fillOpacity="0.85"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Алый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Алый", "#B92350"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.1707"
              cy="25.6829"
              r="23.2752"
              fill="#B92350"
              fillOpacity="0.6"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Красный"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Красный", "#FF0000"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.2195"
              cy="25.6829"
              r="23.2752"
              fill="#FF0000"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Белый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Белый", "#E9E3E8"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.2684"
              cy="25.6829"
              r="23.2752"
              fill="#E9E3E8"
              fillOpacity="0.6"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>

        <button
          className={
            currentColor[0] === "Серый"
              ? "new-task__color new-task__color--active"
              : "new-task__color"
          }
          onClick={() => setColor(["Серый", "#554E55"])}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.3172"
              cy="25.6829"
              r="23.2752"
              fill="#554E55"
              fillOpacity="0.6"
              stroke="#EDEAEA"
              strokeWidth="4.81555"
            />
          </svg>
        </button>
      </div>

      <div className="new-task__options">
        <div className="new-task__tag task-tag">
          <h3 className="task-tag__title">Set a tag</h3>
          <input
            className="task-tag__input"
            type="text"
            placeholder="Set a tag for your task"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          ></input>
          <div className="task-tag__filters">
            <button
              className="task-tag__filter"
              onClick={() => setTag("Daily Routine")}
            >
              Daily Routine
            </button>
            <button
              className="task-tag__filter"
              onClick={() => setTag("Everyday Routine")}
            >
              Everyday Routine
            </button>
            <button
              className="task-tag__filter"
              onClick={() => setTag("Study Routine")}
            >
              Study Routine
            </button>
          </div>
        </div>
      </div>

      <button
        className="new-task__btn"
        onClick={() => {
          addTask(
            title,
            descr,
            email,
            currentDate.toLocaleDateString(),
            currentColor[1],
            tag,
          );
          showListHandler();
        }}
      >
        <span className="material-symbols-outlined">check</span>
      </button>
    </section>
  );
};

export default CreateTask;
