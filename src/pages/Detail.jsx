//components
import Layout from "../components/Layout";
import Todo from "../components/todo/Todo";
import Comments from "../components/detail/comments/Comments";

const Detail = () => {
  return (
    <Layout>
      <Todo />
      <Comments />
    </Layout>
  );
};

export default Detail;
