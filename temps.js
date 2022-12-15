import React from "react";

const Main = () => {
  const onClickDetailButton = (event) => {
    event.preventDefault();

    navigate("/detail");
  };
  return (
    <div>
      <Button
        backgroundImage={"typeOne"}
        onClick={onClickDetailButton}
      ></Button>
      Main
    </div>
  );
};

export default Main;

function button({ type, onClick }) {
  if (type === "navigate") return <button onClick={onClick}></button>;
  return <button backtound={IMAGES[type]} onClick={onClick}></button>;
}



///


// import React from "react";
// import Router from "./shared/Router";

// const App = () => {
//   return <Router />;
// };

// export default App;

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <span>TodoList</span>
      </div>

      <div className="button-box">
        <button className="add-button">추가하기</button>
      </div>

      <div className="contents">
        <div className="todo-list">
          <div className="state-box">
            <span>plan</span>
          </div>
          <div className="todo-card">
            <div className="todo-Progress">Todo</div>
            <div className="card-detail">
              <button className="btnmove1">상세보기</button>

              <h2>Cs공부하기2</h2>

              <button className="btnmove">이동하기</button>
            </div>
          </div>
          <div className="todo-card">
            <div className="todo-Progress">Todo</div>
            <div className="card-detail">
              <button className="btnmove1">상세보기</button>

              <h2>Cs공부하기2</h2>

              <button className="btnmove">이동하기</button>
            </div>
          </div>
          <div className="todo-card">
            <div className="todo-Progress">Todo</div>
            <div className="card-detail">
              <button className="btnmove1">상세보기</button>

              <h2>Cs공부하기2</h2>

              <button className="btnmove">이동하기</button>
            </div>
          </div>
        </div>

        <div className="todo-list">
          <div className="state-box">
            <span>Action</span>
          </div>
          <div className="todo-card">
            <div className="todo-Progress">Action Todo</div>
            <div className="card-detail">
              <button className="btnmove1">상세보기</button>

              <h2>Cs공부하기2</h2>

              <button className="btnmove">이동하기</button>
            </div>
          </div>
          <div className="todo-card">
            <div className="todo-Progress">Action Todo</div>
            <div className="card-detail">
              <button className="btnmove1">상세보기</button>

              <h2>Cs공부하기2</h2>

              <button className="btnmove">이동하기</button>
            </div>
          </div>
          <div className="todo-card">
            <div className="todo-Progress">Action Todo</div>
            <div className="card-detail">
              <button className="btnmove1">상세보기</button>

              <h2>Cs공부하기2</h2>

              <button className="btnmove">이동하기</button>
            </div>
          </div>
        </div>
        <div className="todo-list">
          <div className="state-box">
            <span>Done</span>
          </div>
          <div className="todo-card">
            <div className="todo-Progress">Done Todo</div>
            <div className="card-detail">
              <button className="btnmove1">상세보기</button>

              <h2>Cs공부하기2</h2>

              <button className="btnmove">이동하기</button>
            </div>
          </div>
          <div className="todo-card">
            <div className="todo-Progress">Done Todo</div>
            <div className="card-detail">
              <button className="btnmove1">상세보기</button>

              <h2>Cs공부하기2</h2>

              <button className="btnmove">이동하기</button>
            </div>
          </div>
          <div className="todo-card">
            <div className="todo-Progress">Done Todo</div>
            <div className="card-detail">
              <button className="btnmove1">상세보기</button>

              <h2>Cs공부하기2</h2>

              <button className="btnmove">이동하기</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <span>copyright @항해99</span>
      </div>
    </div>
  );
}

export default App;




////


<div className="layout">
  <div className="header">
    <span>Tod-card</span>
  </div>

  <div className="button-box">
    <button className="btnmove">추가하기</button>
  </div>

  <div className="box">
    <div className="todo-list">
      <div className="todo-card">
        <div className="todo-state">
          <span>plan</span>
        </div>
        <div className="todo-detail">
          <button className="btnmove">상세보기</button>
          <h2>Cs공부하기2</h2>
          <button className="btnmove">이동하기</button>
        </div>
      </div>

      <div className="todo-card">
        <div className="todo-state">
          <span>Action</span>
        </div>
        <div className="todo-detail">
          <button className="btnmove">상세보기</button>
          <h2>Cs공부하기2</h2>
          <button className="btnmove">이동하기</button>
        </div>
      </div>

      <div className="todo-card">
        <div className="todo-state">
          <span>Done</span>
        </div>
        <div className="todo-detail">
          <button className="btnmove">상세보기</button>
          <h2>Cs공부하기2</h2>
          <button className="btnmove">이동하기</button>
        </div>
      </div>
    </div>

    <div className="todo-list">
      <div className="todo-card">
        <div className="todo-state">
          <span>plan</span>
        </div>
        <div className="todo-detail">
          <button className="btnmove">상세보기</button>
          <h2>Cs공부하기2</h2>
          <button className="btnmove">이동하기</button>
        </div>
      </div>

      <div className="todo-card">
        <div className="todo-state">
          <span>Action</span>
        </div>
        <div className="todo-detail">
          <button className="btnmove">상세보기</button>
          <h2>Cs공부하기2</h2>
          <button className="btnmove">이동하기</button>
        </div>
      </div>

      <div className="todo-card">
        <div className="todo-state">
          <span>Done</span>
        </div>
        <div className="todo-detail">
          <button className="btnmove">상세보기</button>
          <h2>Cs공부하기2</h2>
          <button className="btnmove">이동하기</button>
        </div>
      </div>
    </div>

    <div className="todo-list">
      <div className="todo-card">
        <div className="todo-state">
          <span>plan</span>
        </div>
        <div className="todo-detail">
          <button className="btnmove">상세보기</button>
          <h2>Cs공부하기2</h2>
          <button className="btnmove">이동하기</button>
        </div>
      </div>

      <div className="todo-card">
        <div className="todo-state">
          <span>Action</span>
        </div>
        <div className="todo-detail">
          <button className="btnmove">상세보기</button>
          <h2>Cs공부하기2</h2>
          <button className="btnmove">이동하기</button>
        </div>
      </div>

      <div className="todo-card">
        <div className="todo-state">
          <span>Done</span>
        </div>
        <div className="todo-detail">
          <button className="btnmove">상세보기</button>
          <h2>Cs공부하기2</h2>
          <button className="btnmove">이동하기</button>
        </div>
      </div>
    </div>
  </div>

  <div className="footer">
    <span>copyright @항해99</span>
  </div>
</div>