import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Main from "../pages/Main";
import AddTodo from "../pages/AddTodo";
import Detail from "../pages/Detail";
// import Layout from "../components/main/layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
};

export default Router;
