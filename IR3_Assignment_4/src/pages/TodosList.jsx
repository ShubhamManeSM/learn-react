import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TodosList = () => {
  const todos = [
    { id: 1, title: "Buy Bread" },
    { id: 2, title: "Go for a Walk" },
    { id: 3, title: "Attend Painting class" },
    { id: 4, title: "Buy flowers" },
    { id: 5, title: "Visit Church" },
    { id: 6, title: "Write Journal" },
    { id: 7, title: "Water the plants" },
    { id: 8, title: "Clean the windows" },
    { id: 9, title: "Buy Gifts for Holi" },
  ];

  return (
    <>
    <Header />
    <main className="container py-5">
      <h2 className="mb-4 fw-bold">Todo List</h2>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>
                  <Link to={`/todos/${todo.id}`} className="text-decoration-none">
                    {todo.title}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default TodosList;
