import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="mb-4">Featured Products</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://placehold.co/400x300"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">
                  Description of Product 1. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <a href="/products/1" className="btn btn-primary">View Product</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://placehold.co/400x300"
                className="card-img-top"
                alt="Product 2"
              />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">
                  Description of Product 2. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <a href="/products/2" className="btn btn-primary">View Product</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://placehold.co/400x300"
                className="card-img-top"
                alt="Product 3"
              />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">
                  Description of Product 3. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <a href="/products/3" className="btn btn-primary">View Product</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
