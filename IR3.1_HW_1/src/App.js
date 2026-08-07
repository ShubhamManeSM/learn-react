import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
    <main className="container py-4">
      <div>
      <h1 className="">Featured Restaurants</h1>
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Restaurant" className="img-fluid rounded mt-2" />
      <h3 className="mt-2">Taste of Italy</h3>
      <p>Italian | Rating: 4.5</p>
      <p>123 Main Street, Anytown, USA</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnRzfGVufDB8fDB8fHww" alt="Restaurant 2" className="img-fluid rounded" />
        <h3 className="mt-2">Spice Village</h3>
        <p>Indian | Rating: 4.3</p>
        <p>456 Elm Street, Anytown, USA</p>
      </div>
    </main>
  );
}
