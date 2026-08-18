import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description:
        "Description of Product 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque expedita nesciunt, molestias iusto vel consequatur qui neque asperiores at voluptatum esse et deleniti voluptate hic ad ut sunt est?.",
      price: 99.99,
      image: "https://placehold.co/300x300",
    },
    {
      id: 2,
      name: "Product 2",
      description:
        "Description of Product 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque expedita nesciunt, molestias iusto vel consequatur qui neque asperiores at voluptatum esse et deleniti voluptate hic ad ut sunt est?.",
      price: 129.99,
      image: "https://placehold.co/300x300",
    },
    {
      id: 3,
      name: "Product 3",
      description:
        "Description of Product 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque expedita nesciunt, molestias iusto vel consequatur qui neque asperiores at voluptatum esse et deleniti voluptate hic ad ut sunt est?.",
      price: 79.99,
      image: "https://placehold.co/300x300",
    },
    {
      id: 4,
      name: "Product 4",
      description:
        "Description of Product 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque expedita nesciunt, molestias iusto vel consequatur qui neque asperiores at voluptatum esse et deleniti voluptate hic ad ut sunt est?.",
      price: 49.99,
      image: "https://placehold.co/300x300",
    },
  ];

  const affordableProducts = products.filter((p) => p.price < 80);

  return (
    <>
      <Header />
      <main className="container py-4 text-start">
        <h1>Products</h1>

        {products.map((product) => (
          <div className="card mb-4" key={product.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid h-80 w-80"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="text-muted">
                    <small>Price: ${product.price}</small>
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-primary"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <hr className="my-5" />
        <h2 className="display-4 mb-4">Affordable Products</h2>

        {affordableProducts.map((product) => (
          <div key={`affordable-${product.id}`} className="mb-4">
            <h5 className="fw-bold">{product.name}</h5>
            <p className="mb-1">{product.description}</p>
            <p className="text-muted mb-0">Price: ${product.price}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
