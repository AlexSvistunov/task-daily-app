// import { getDatabase, ref, child, push, update } from "firebase/database";
// import { db } from "../../firebase/firebase";
// import { doc, updateDoc } from "firebase/firestore";
// import { arrayUnion } from "firebase/firestore";
import { getTodos } from "../../store/slices/todoSlice";
// import { arrayRemove } from "firebase/firestore";
import { getDatabase, remove } from "firebase/database";
import { ref } from "firebase/database";
import { update } from "firebase/database";
import { useAuth } from "../../hooks/use-auth";

// import { FieldValue } from "firebase/firestore";

import { useEffect } from "react";

import "./TaskModal.css";
import { useDispatch } from "react-redux";

const TaskModal = ({
  modalIsOpen,
  setModalIsOpen,
  dataModal,
  setDataModal,
}) => {
  console.log(dataModal);
  const { email, token } = useAuth();
  const dispatch = useDispatch();
  async function updateTitle() {
    const db = getDatabase();

    const updates = {};

    updates[`users/${token}/${dataModal.currentIndex}/title`] = dataModal.title;
    updates[`users/${token}/${dataModal.currentIndex}/descr`] = dataModal.descr;

    update(ref(db), updates)
      .then(() => {
        dispatch(getTodos(token));
        console.log("success");
        setModalIsOpen(false);
      })
      .catch((error) => console.log(error.message));
  }

  function hexToRgb(hex) {
    hex = hex.replace("#", "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.8)`;
  }

  const deleteTask = async () => {
    const db = getDatabase()
    remove(ref(db, 'users/' + token + '/' + dataModal.currentIndex))
    setModalIsOpen(false)


    dispatch(getTodos(token));
  
  }



  console.log(dataModal);
  return (
    <div className="task-modal">
      <div
        className="task-modal__inner"
        style={{
          backgroundColor: hexToRgb(dataModal.color),
          boxShadow: `-3px 4px 5px ${hexToRgb(dataModal.color)}`,
        }}
      >
        <div className="task-modal__content">
          <input
            className="task-modal__input"
            type="text"
            placeholder="Title"
            value={dataModal.title}
            onChange={(e) =>
              setDataModal({
                ...dataModal,
                ["title"]: e.target.value,
              })
            }
          ></input>
          <input
            className="task-modal__input"
            type="text"
            placeholder="Descr"
            value={dataModal.descr}
            onChange={(e) =>
              setDataModal({
                ...dataModal,
                ["descr"]: e.target.value,
              })
            }
          ></input>
        </div>

        <button
          className="task-modal__close"
          onClick={() => setModalIsOpen(false)}
        >
          X
        </button>

        <div className="task-modal__btn-box">
          <button className="task-modal__apply" onClick={() => updateTitle()}>
            {/* token, index, email, value */}
            Apply
          </button>

          <button className="task-modal__delete" onClick={deleteTask}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#9fa8da"
                d="M44,12.9h-7.6c-0.5-3.4-3.4-6-6.9-6s-6.4,2.6-6.9,6H15c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h0.6l2.5,25.9	c0.2,2.1,1.9,3.6,4,3.6h14.7c2.1,0,3.8-1.6,4-3.6l2.5-25.9H44c0.8,0,1.5-0.7,1.5-1.5S44.8,12.9,44,12.9z"
              ></path>
              <path
                fill="none"
                stroke="#18193f"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M29.5,11.5V11c0-3-2.5-5.5-5.5-5.5S18.5,8,18.5,11v0.5"
              ></path>
              <line
                x1="7.5"
                x2="40.5"
                y1="11.5"
                y2="11.5"
                fill="none"
                stroke="#18193f"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3"
              ></line>
              <line
                x1="36.5"
                x2="38"
                y1="27"
                y2="11.5"
                fill="none"
                stroke="#18193f"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3"
              ></line>
              <path
                fill="none"
                stroke="#18193f"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M10.7,18.6l2,20.3c0.2,2.1,1.9,3.6,4,3.6h14.7c2.1,0,3.8-1.6,4-3.6l0.5-4.8"
              ></path>
            </svg>
          </button>
        </div>

        <div>CHANGE COLOR</div>
        <div>CHANGE TAGS</div>
      </div>
    </div>
  );

  // able to delete(red bucket), able to edit, with background color of its item, change the date(reschedule)
};

export default TaskModal;
