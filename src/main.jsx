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



// адаптив
// чтобы можно было выйти из создания(вдруг ошибся)
// настройки аватара
// возомжно чтобы не каждый раз отправлять запрос, у нас же есть на этот день todos
// черная и белая тема
// когда log out перебрасывать 

// проверка заполненности полей, когда создаешь таск и если что говорить
// сделать все на английском, например, цвета
// не по списку идут, так как айдишник, но можно сортировать по дате
// внешний вид сделать более ориентированный на фиолетовый акцентный, но чтобы все равно можно было переключить тему
// всякие ховеры и мелочи
// адаптив
// чтобы наверное нельзя было вписывать свои теги, но можно было нажать создать новый тег
// фильтрацию по тегам
// дело сделано/не сделано
// кастомный чекбокс
