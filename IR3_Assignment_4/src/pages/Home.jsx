import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container text-center py-5">
      <img
        src="https://images.unsplash.com/photo-1712000155290-ee65c0a82eda?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60"
        alt="Todo List"
        className="img-fluid mb-4 rounded shadow"
        style={{ maxWidth: "400px" }}
      />
      <h2>Todos</h2>
      <p>Welcome to the Todo application!</p>
      <Link to="/todos" className="btn btn-primary mt-3">
        View Todos
      </Link>
    </main>
  );
};

export default Home;
