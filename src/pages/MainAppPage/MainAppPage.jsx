import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Aside from "../../components/Aside/Aside";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import CreateTask from "../../components/CreateTask/CreateTask";
import TaskList from "../../components/TaskList/TaskList";

import "./MainAppPage.css";

const MainAppPage = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const [showList, setShowList] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDropdownShown, setIsDropdownShown] = useState(false)

  const changeDate = (value) => {
    setCurrentDate(value);
  };

  const logOutHandler = () => {
    dispatch(removeUser());
  };

  const showListHandler = () => {
    setShowList(!showList);
  };
  const todos = useSelector((state) => state.todos.todoList);

  // возможно тут диспатчить запрос

  return (
    <>
      <div className="page-app">
        <Aside currentDay={currentDate} changeDay={changeDate} />

        <div className="page-app__main">
          <header className="page-app__header">
            {email && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                {/* <span>{email}</span>
                <button onClick={logOutHandler}>Log out</button> */}
                <button className="page-app__header-theme"></button>
                <div className="user">
                  <button className="page-app__header-user" onClick={() => setIsDropdownShown(!isDropdownShown)}></button>
                  <div className={isDropdownShown ? "user__dropdown user__dropdown--active" : 'user__dropdown'}>
                    <button onClick={logOutHandler}>Log out</button>
                    <button>Set | Change avatar</button>
                    <button>Settings</button>
                  </div>
                </div>
              </div>
            )}
          </header>
          <main>
            <h1 className="title">{currentDate.toDateString()}</h1>
            {showList ? (
              <TaskList
                showListHandler={showListHandler}
                currentDate={currentDate}
              />
            ) : (
              <CreateTask
                currentDate={currentDate}
                showListHandler={showListHandler}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default MainAppPage;
