import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Aside from "../../components/Aside/Aside";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

import './MainAppPage.css'
import CreateTask from "../../components/CreateTask/CreateTask";
import TaskList from "../../components/TaskList/TaskList";

const MainAppPage = () => {
  const dispatch = useDispatch()
  const email = useSelector(state => state.user.email)
  const [showList, setShowList] = useState(true)
  console.log(email);
  const [currentDay, setCurrentDay] = useState(new Date())

  const changeDay = (value) => {
    setCurrentDay(value)
  }

  const logOutHandler = () => {
    dispatch(removeUser())
  }

  const showListHandler = () => {
    setShowList(!showList)
  }
  const todos = useSelector((state) => state.todos.todoList);
  console.log(todos);
 
  return (
    <>
      <div className="page-app">

        <Aside currentDay={currentDay} changeDay={changeDay}/>

        <div className="page-app__main">
          <header className="page-app__header">
            {email && 
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <span>{email}</span>
              <button onClick={logOutHandler}>Log out</button>

            </div>
            }
          </header>
          <main>
            <h1 className="title">{currentDay.toDateString()}</h1>
            {showList ? <TaskList showListHandler={showListHandler} currentDay={currentDay}/> : <CreateTask currentDay={currentDay} showListHandler={showListHandler}/>}
          </main>
        </div>
      </div>
    </>
  );
};

export default MainAppPage;
