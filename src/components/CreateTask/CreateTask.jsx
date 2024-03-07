import { useState } from "react"
import { addDoc, updateDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import { doc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/use-auth";
import { arrayUnion } from "firebase/firestore";
import { useEffect } from "react";

import { getDoc } from "firebase/firestore";

const CreateTask = () => {

  const [userData, setUserData] = useState([]);
  console.log(userData);

  useEffect(() => {
    getDataBaseData(email)
  }, []);

  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('');

  const {email} = useAuth()

  const addTask = async (title, descr, email) => {

    const theDoc = doc(db, 'users', email)
    await updateDoc((theDoc), {
      todos: arrayUnion({title, descr})
    });
  };

  const getDataBaseData = async (email) => {
    const myData = doc(db, 'users', email)
    const docSnap = await getDoc(myData);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserData(docSnap.data())
      return docSnap.data()
    } else {
      console.log("No such document!");
      return []
    }
  }


  // we need to save our tasks in user's fields
  return (
    <div>
      <input placeholder='Title' value={title} onChange={(e) =>  setTitle(e.target.value)}></input>
      <input placeholder='Descr' value={descr} onChange={(e) =>  setDescr(e.target.value)}></input>
      <button onClick={() => addTask(title, descr, email)}>Create task</button>
      <button onClick={() => getDataBaseData(email)}>Get data</button>

      {userData.todos && userData.todos.map((el) => (
        <div key={el.title}>{el.title}</div>
      ))}
    </div>
  )
}

export default CreateTask