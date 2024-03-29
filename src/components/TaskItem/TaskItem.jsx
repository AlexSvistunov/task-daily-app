import { useState } from "react";

const TaskItem = ({color, setModalIsOpen, setDataModal, el}) => {

  const [isCheckedInput, setIsCheckedInput] = useState(false)
  console.log(isCheckedInput);


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
 
        }}
      ></input>
      <span className="list-task__title">{el.title}</span>
    </li>
  );
};

// ну и все, а дальше как в taskModal, просто еще нужно получать обновления, а не false

export default TaskItem;
