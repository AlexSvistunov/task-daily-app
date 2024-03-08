import { useState } from "react";
import { addDoc, updateDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import { doc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/use-auth";
import { arrayUnion } from "firebase/firestore";
import { useEffect } from "react";
import { getTodos } from "../../store/slices/todoSlice";

import { getDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

const CreateTask = () => {
  const dispatch = useDispatch()

  const [userData, setUserData] = useState([]);
  console.log(userData);

  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");

  const { email } = useAuth();
  useEffect(() => {
    dispatch(
      getTodos(email)
    )
  }, [])

  const todos = useSelector(state => state.todos.todoList)
  console.log(todos);

  const addTask = async (title, descr, email) => {
    const theDoc = doc(db, "users", email);
    await updateDoc(theDoc, {
      todos: arrayUnion({ title, descr }),
    });

    getDataBaseData(email);
  };

  const getDataBaseData = async (email) => {
    const myData = doc(db, "users", email);
    const docSnap = await getDoc(myData);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserData(docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return [];
    }
  };

  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        placeholder="Descr"
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
      ></input>
      <button onClick={() => addTask(title, descr, email)}>Create task</button>
      <button onClick={() => getDataBaseData(email)}>Get data</button>

      {todos.todos &&
        todos.todos.map((el) => <div key={el.title}>{el.title}</div>)}
    </div>
  );
};

export default CreateTask;
