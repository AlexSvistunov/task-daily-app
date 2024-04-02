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




// настройки аватара
// возомжно чтобы не каждый раз отправлять запрос, у нас же есть на этот день todos
// черная и белая тема

// сделать все на английском, например, цвета
// внешний вид сделать более ориентированный на фиолетовый акцентный, но чтобы все равно можно было переключить тему
// всякие ховеры и мелочи
// адаптив
// чтобы наверное нельзя было вписывать свои теги, но можно было нажать создать новый тег или своя менюшка где настраивать в настройках, напимрер
// фильтрацию по тегам
// сортировка по выполненным(внизу или вверху) или вообще ничего не происходит, но можно drag and drop перетаскивать самому
// внизу есть под линии выполненные, если нажимаешь на чекбокс - оно туда попадает, но можно сделать это и вручную - перетащить

// есть mobile app
// чтобы были теги сверху как на мобильной версии как табы