import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTodos } from "../../store/slices/todoSlice";
import { useAuth } from "../../hooks/use-auth";

const TaskItem = ({
  color,
  setModalIsOpen,
  setDataModal,
  dataModal,
  el,
  updateIsDone,
  index,
}) => {
  const { email, token } = useAuth();
  const [isCheckedInput, setIsCheckedInput] = useState(
    useSelector((state) => state.todos.todoList).find(
      (el) => el.currentIndex === index
    )["done"]
  );

  console.log(isCheckedInput);

  // const isCheckedHandler = () => {
  //   setIsCheckedInput(!isCheckedInput)
  //   updateIsDone(index, isCheckedInput)
  // }

  return (
    <li
      className="tasks-list__task list-task"
      style={{ backgroundColor: color }}
      onClick={(e) => {
        if (e.target.tagName !== "INPUT" && e.target.tagName !== "SPAN") {
          setModalIsOpen(true);
          setDataModal(el);
        }
      }}
    >
      <div class="checkbox-wrapper-12">
        <div class="cbx">
          <input id="cbx-12" type="checkbox" checked={isCheckedInput} onChange={(e) => {
          setIsCheckedInput(!isCheckedInput);
          setDataModal({
            ...dataModal,
            ["done"]: isCheckedInput,
          });
          
          setTimeout(() => {
            updateIsDone(index, isCheckedInput);
          }, 500)
        }} />
          <label for="cbx-12"></label>
          <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
            <path d="M2 8.36364L6.23077 12L13 2"></path>
          </svg>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo-12">
              <fegaussianblur
                in="SourceGraphic"
                stddeviation="4"
                result="blur"
              ></fegaussianblur>
              <fecolormatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                result="goo-12"
              ></fecolormatrix>
              <feblend in="SourceGraphic" in2="goo-12"></feblend>
            </filter>
          </defs>
        </svg>
      </div>

      {/* <input
        className="list-task__checkbox"
        type="checkbox"
        checked={isCheckedInput}
        onChange={(e) => {
          setIsCheckedInput(!isCheckedInput);
          setDataModal({
            ...dataModal,
            ["done"]: isCheckedInput,
          });

          // setIsCheckedInput(!isCheckedInput)
          updateIsDone(index, isCheckedInput);
        }}
      ></input> */}
      <span className="list-task__title">{el.title}</span>
    </li>
  );
};

// ну и все, а дальше как в taskModal, просто еще нужно получать обновления, а не false

export default TaskItem;
