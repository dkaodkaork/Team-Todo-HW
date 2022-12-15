import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import AddTodoPage from "../pages/AddTodoPage";
import Detail from "../pages/Detail";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<AddTodoPage />} />
          <Route path="detail/:paramsId" element={<Detail />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
