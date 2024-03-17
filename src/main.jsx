import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import './firebase/firebase.js'


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// проблема с индексами(волшебное число 2, ну вообще скорее не то возвращается и оно становится объектом)
// дело сделано

// адаптив
// чтобы можно было выйти из создания(вдруг ошибся)
// настройки аватара
// возомжно чтобы не каждый раз отправлять запрос, у нас же есть на этот день todos
// черная и белая тема
// когда log out перебрасывать 
