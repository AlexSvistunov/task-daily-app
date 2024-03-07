import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Aside from "../../components/Aside/Aside";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

import './MainAppPage.css'
import CreateTask from "../../components/CreateTask/CreateTask";

const MainAppPage = () => {
  const dispatch = useDispatch()
  const email = useSelector(state => state.user.email)
  console.log(email);

  const logOutHandler = () => {
    dispatch(removeUser())
  }
 

  return (
    <>
      <div className="page-app">

        <Aside/>

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
            <img src=""></img>
            <CreateTask/>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainAppPage;
