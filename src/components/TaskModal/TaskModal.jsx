// import { getDatabase, ref, child, push, update } from "firebase/database";
// import { db } from "../../firebase/firebase";
// import { doc, updateDoc } from "firebase/firestore";
// import { arrayUnion } from "firebase/firestore";
import { getTodos } from "../../store/slices/todoSlice";
// import { arrayRemove } from "firebase/firestore";
import { getDatabase } from "firebase/database";
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
  const { email, token } = useAuth();
  const dispatch = useDispatch();
  async function updateTitle() {
    const db = getDatabase();
   
    const updates = {}
    // updates['users/' + token + '/' + '0' + "title"] = dataModal.title
    updates[`users/${token}/${dataModal.currentIndex}/title`] = dataModal.title;

    update(ref(db), updates).then(() => {
      dispatch(getTodos(token));
      console.log('success');
      setModalIsOpen(false)
    }).catch((error) => console.log(error.message))

    // AND DESCR AND FIX INDEX
    
    // const theDoc = doc(db, "users", email);

    // await updateDoc(theDoc, {
    //   todos: arrayRemove('0'),
    // });

    // await updateDoc(theDoc, {
    //   [`todos.0`]: arrayRemove(),
    // });

    // await updateDoc(theDoc, {
    //   todos: arrayUnion({
    //     0: {
    //       title: value,
    //     },
    //   }),
    // });

    // subcollection instead of an array
  }

  console.log(dataModal);
  return (
    <div className="task-modal">
      <div className="task-modal__inner">
        <div className="task-modal__content">
          <input
            className="task-modal__input"
            type="text"
            placeholder="Title"
            value={dataModal.title}
            onChange={
              (e) =>
                setDataModal({
                  ...dataModal,
                  ["title"]: e.target.value,
                })

              //  но будет ли меняться на сервере, и не меняется на стейте!!!
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
        <button className="task-modal__apply" onClick={() => updateTitle()}> 
        {/* token, index, email, value */}
          Apply
        </button>
      </div>
    </div>
  );

  // able to delete(red bucket), able to edit, with background color of its item, change the date(reschedule)
};

export default TaskModal;
