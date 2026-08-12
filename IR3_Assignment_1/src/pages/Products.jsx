import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom"

export default function Products(){
    return(
        <>
        <Header />
        <main className="container py-4 text-start">
            <h1>Products</h1>

            <div class="card mb-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://placehold.co/300x300" alt="Product 1" className="img-fluid h-80 w-80" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Product 1</h5>
                            <p class="card-text">
                               Description of Product 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque expedita nesciunt, molestias iusto vel consequatur qui neque asperiores at voluptatum esse et deleniti voluptate hic ad ut sunt est?. 
                            </p>
                            <p className="text-muted">
                                <small>Price: $99.99</small>
                            </p>
                            <Link to="/products/1" className="btn btn-primary">View Product</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://placehold.co/300x300" alt="Product 2" className="img-fluid h-80 w-80" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Product 2</h5>
                            <p class="card-text">
                            Description of Product 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque expedita nesciunt, molestias iusto vel consequatur qui neque asperiores at voluptatum esse et deleniti voluptate hic ad ut sunt est?. 
                            </p>
                            <p className="text-muted">
                                <small>Price: $129.99</small>
                            </p>
                            <Link to="/products/2" className="btn btn-primary">View Product</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://placehold.co/300x300" alt="Product 3" className="img-fluid h-80 w-80" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Product 3</h5>
                            <p class="card-text">
                            Description of Product 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque expedita nesciunt, molestias iusto vel consequatur qui neque asperiores at voluptatum esse et deleniti voluptate hic ad ut sunt est?. 
                            </p>
                            <p className="text-muted">
                                <small>Price: $79.99</small>
                            </p>
                            <Link to="/products/3" className="btn btn-primary">View Product</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://placehold.co/300x300" alt="Product 4" className="img-fluid h-80 w-80" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Product 4</h5>
                            <p class="card-text">
                            Description of Product 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque expedita nesciunt, molestias iusto vel consequatur qui neque asperiores at voluptatum esse et deleniti voluptate hic ad ut sunt est?. 
                            </p>
                            <p className="text-muted">
                                <small>Price: $49.99</small>
                            </p>
                            <Link to="/products/4" className="btn btn-primary">View Product</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}