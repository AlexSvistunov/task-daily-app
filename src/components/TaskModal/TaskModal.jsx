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
    hex = hex.replace('#', '');

    // Разбиваем шестнадцатеричное значение на отдельные компоненты
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.8)`;
}


  console.log(dataModal);
  return (
    <div className="task-modal">
      <div className="task-modal__inner" style={{backgroundColor: hexToRgb(dataModal.color), boxShadow: `-3px 4px 5px ${hexToRgb(dataModal.color)}`}}>
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

          <button className="task-modal__delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="i9gMV8RPRiXBVRoCh9BlCa_BJkQWseLWhe4_gr1"
                x1="24"
                x2="24"
                y1="16.026"
                y2="18.015"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#912fbd"></stop>
                <stop offset="1" stop-color="#9332bf"></stop>
              </linearGradient>
              <path
                fill="url(#i9gMV8RPRiXBVRoCh9BlCa_BJkQWseLWhe4_gr1)"
                d="M41,18H7c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h34c0.552,0,1,0.448,1,1v0	C42,17.552,41.552,18,41,18z"
              ></path>
              <linearGradient
                id="i9gMV8RPRiXBVRoCh9BlCb_BJkQWseLWhe4_gr2"
                x1="24"
                x2="24"
                y1="42.885"
                y2="10.323"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#912fbd"></stop>
                <stop offset="1" stop-color="#9332bf"></stop>
              </linearGradient>
              <path
                fill="url(#i9gMV8RPRiXBVRoCh9BlCb_BJkQWseLWhe4_gr2)"
                d="M39,11v30c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V11H39z"
              ></path>
              <linearGradient
                id="i9gMV8RPRiXBVRoCh9BlCc_BJkQWseLWhe4_gr3"
                x1="24"
                x2="24"
                y1="7.171"
                y2="14.301"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#c965eb"></stop>
                <stop offset="1" stop-color="#c767e5"></stop>
              </linearGradient>
              <path
                fill="url(#i9gMV8RPRiXBVRoCh9BlCc_BJkQWseLWhe4_gr3)"
                d="M8,11v-1c0-1.657,1.343-3,3-3h26c1.657,0,3,1.343,3,3v1H8z"
              ></path>
              <linearGradient
                id="i9gMV8RPRiXBVRoCh9BlCd_BJkQWseLWhe4_gr4"
                x1="24"
                x2="24"
                y1="4.04"
                y2="7.022"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#ae4cd5"></stop>
                <stop offset="1" stop-color="#ac4ad5"></stop>
              </linearGradient>
              <path
                fill="url(#i9gMV8RPRiXBVRoCh9BlCd_BJkQWseLWhe4_gr4)"
                d="M28,4h-8c-1.105,0-2,0.895-2,2v1h12V6C30,4.895,29.105,4,28,4z"
              ></path>
              <linearGradient
                id="i9gMV8RPRiXBVRoCh9BlCe_BJkQWseLWhe4_gr5"
                x1="15"
                x2="33"
                y1="27"
                y2="27"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#ae4cd5"></stop>
                <stop offset="1" stop-color="#ac4ad5"></stop>
              </linearGradient>
              <rect
                width="18"
                height="32"
                x="15"
                y="11"
                fill="url(#i9gMV8RPRiXBVRoCh9BlCe_BJkQWseLWhe4_gr5)"
              ></rect>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  // able to delete(red bucket), able to edit, with background color of its item, change the date(reschedule)
};

export default TaskModal;
