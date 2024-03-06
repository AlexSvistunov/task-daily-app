import { useState } from "react";
import Calendar from "react-calendar";

import "./Aside.css";

const Aside = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentDateHandler = (e) => {
    setCurrentDate(e);
  };

  return (
    <aside className="aside">
      <div className="aside__inner">
        <a className="logo aside__logo"></a>
        <Calendar
          className="aside__calendar"
          value={currentDate}
          onChange={currentDateHandler}
        />

        <ul className="tasks">
          <h3 className="tasks__title">Tasks</h3>
          <li className="task">
            <span className="task__name">Today</span>
            <span className="task__amount">2</span>
          </li>
        </ul>

        <ul className="lists">
          <h3 className="lists__title">Lists</h3>
          <li className="list">
            <span className="list__title">Daily Routine</span>
            <span className="list__amont">2</span>
          </li>

          <li className="list">
            <span className="list__title">Study</span>
            <span className="list__amount">0</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;