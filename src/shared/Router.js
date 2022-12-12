import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Main from "../pages/Main";
import AddTodo from "../pages/AddTodo";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="detail/:parmsId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
