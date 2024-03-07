import { useState } from "react"
import { addDoc, updateDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import { doc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/use-auth";
import { arrayUnion } from "firebase/firestore";

const CreateTask = () => {
  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('');

  const {email} = useAuth()

  const addTask = async (title, descr, email) => {

    const theDoc = doc(db, 'users', email)
    await updateDoc((theDoc), {
      todos: arrayUnion({title, descr})
    });
  };


  // we need to save our tasks in user's fields
  return (
    <div>
      <input placeholder='Title' value={title} onChange={(e) =>  setTitle(e.target.value)}></input>
      <input placeholder='Descr' value={descr} onChange={(e) =>  setDescr(e.target.value)}></input>
      <button onClick={() => addTask(title, descr, email)}>Create task</button>
    </div>
  )
}

export default CreateTask