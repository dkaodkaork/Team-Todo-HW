import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Main from "../pages/Main";
import AddTodoPage from "../pages/AddTodoPage";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddTodoPage />} />
        <Route path="detail/:paramsId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
