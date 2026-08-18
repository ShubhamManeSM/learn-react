import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  const cart = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
  ];

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <main className="container my-4 text-start">
        <h1 className="display-5 mb-4">Shopping Cart</h1>

        <div className="list-group mb-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div>
                <h5 className="mb-1">{item.name}</h5>
                <p className="mb-1">Price: ${item.price.toFixed(2)}</p>
                <p className="mb-1">Quantity: {item.quantity}</p>
              </div>
              <p className="fw-bold text-end mb-0">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <h4 className="fw-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </h4>
      </main>
      <Footer />
    </>
  );
}
