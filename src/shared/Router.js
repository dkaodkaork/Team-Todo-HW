import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Main from "../pages/Main";
import AddTodoPage from "../pages/AddTodoPage";
import Detail from "../pages/Detail";
import Layout from "../components/main/layout/Layout";

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
