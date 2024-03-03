const MainAppPage = () => {
  return (
    <>
      <div>
        <aside>
          <a className="logo"></a>
          {/* CALENDAR */}
          <div className="tasks">
            <h3 className="tasks__title">Tasks</h3>
            <div>
              <span>Today</span>
              <span>2</span>
            </div>
          </div>

          <div className="lists">
            <h3 className="lists__title">Lists</h3>
            <div>
              <div>
                <span>Daily Routine</span>
                <span>2</span>
              </div>

              <div>
                <span>Study</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </aside>

        <div>
          <header></header>
          <main>
            Today
            <img src=""></img>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainAppPage;
