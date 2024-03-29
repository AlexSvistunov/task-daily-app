import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTodos } from "../../store/slices/todoSlice";
import { useAuth } from "../../hooks/use-auth";

const TaskItem = ({color, setModalIsOpen, setDataModal, dataModal, el, updateIsDone, index}) => {
  const { email, token } = useAuth();
  const [isCheckedInput, setIsCheckedInput] = useState(useSelector((state) => state.todos.todoList).find((el) => el.currentIndex === index)['done'])

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
        if (e.target.tagName !== "INPUT") {
          setModalIsOpen(true);
          setDataModal(el);
        }
      }}
    >
      <input
        className="list-task__checkbox"
        type="checkbox"
        checked={isCheckedInput}
        onChange={(e) => {
          setIsCheckedInput(!isCheckedInput)
          setDataModal({
            ...dataModal,
            ['done']: isCheckedInput,
          }
         
          )

          // setIsCheckedInput(!isCheckedInput)
          updateIsDone(index, isCheckedInput)

      
 
        }}
      ></input>
      <span className="list-task__title">{el.title}</span>
    </li>
  );
};

// ну и все, а дальше как в taskModal, просто еще нужно получать обновления, а не false

export default TaskItem;
