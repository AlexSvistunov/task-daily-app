import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Aside from "../../components/Aside/Aside";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import CreateTask from "../../components/CreateTask/CreateTask";
import TaskList from "../../components/TaskList/TaskList";

import "./MainAppPage.css";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../utils/routes";
import BottomSide from "../../components/BottomSide/BottomSide";
import Calendar from "react-calendar";

const MainAppPage = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const { isAuth } = useAuth();

  const [showList, setShowList] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [arrayListInfo, setArrayListInfo] = useState([])

  const [calendarIsOpen, setCalendarIsOpen] = useState(false)
  const [todoIsOpen, setTodoIsOpen] = useState(true)
  
  const changeDate = (value) => {
    setCurrentDate(value);
  };

  const logOutHandler = () => {
    dispatch(removeUser());
  };

  const showListHandler = () => {
    setShowList(!showList);
  };

  const openCalendar = () => {
   setCalendarIsOpen(true)
  }

  const closeCalendar = () => {
    setCalendarIsOpen(false)
  }

  const todoOpen = () => {
    setTodoIsOpen(true)
  }
  const todos = useSelector((state) => state.todos.todoList);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(ROUTES.LANDINGPAGE);
    }
  }, [isAuth, navigate])


  return (
    <>
      {calendarIsOpen ? (
        <Calendar value={currentDate}
          onChange={changeDate}/>
      ) :  <div className="page-app">
        <Aside currentDay={currentDate} changeDay={changeDate} />

        <div className="page-app__main">
          <header className="page-app__header">
            {email && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <button className="page-app__header-theme"></button>
                <div className="user">
                  <button
                    className="page-app__header-user"
                    onClick={() => setIsDropdownShown(!isDropdownShown)}
                  ></button>
                  <div
                    className={
                      isDropdownShown
                        ? "user__dropdown user__dropdown--active"
                        : "user__dropdown"
                    }
                  >
                    <button>Avatar</button>
                    <button>Settings</button>
                    <button onClick={logOutHandler}>Log out</button>
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
                arrayListInfo={arrayListInfo}
                setArrayListInfo={setArrayListInfo}
               
              />
            ) : (
              <CreateTask
                currentDate={currentDate}
                showListHandler={showListHandler}
                arrayListInfo={arrayListInfo}
                setArrayListInfo={setArrayListInfo}
               
              />
            )}
          </main>
        </div>
      </div>}
     
      {/* {todoIsOpen ? <div className="page-app">
        <Aside currentDay={currentDate} changeDay={changeDate} />

        <div className="page-app__main">
          <header className="page-app__header">
            {email && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <button className="page-app__header-theme"></button>
                <div className="user">
                  <button
                    className="page-app__header-user"
                    onClick={() => setIsDropdownShown(!isDropdownShown)}
                  ></button>
                  <div
                    className={
                      isDropdownShown
                        ? "user__dropdown user__dropdown--active"
                        : "user__dropdown"
                    }
                  >
                    <button>Avatar</button>
                    <button>Settings</button>
                    <button onClick={logOutHandler}>Log out</button>
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
                arrayListInfo={arrayListInfo}
                setArrayListInfo={setArrayListInfo}
               
              />
            ) : (
              <CreateTask
                currentDate={currentDate}
                showListHandler={showListHandler}
                arrayListInfo={arrayListInfo}
                setArrayListInfo={setArrayListInfo}
               
              />
            )}
          </main>
        </div>
      </div> : null} */}
      <BottomSide openCalendar={openCalendar} closeCalendar={closeCalendar}/>
    </>
  );
};

export default MainAppPage;
