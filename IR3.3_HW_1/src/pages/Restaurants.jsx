import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom"

export default function Restaurants() {
    return (
        <>
        <Header/>
      <main className="container py-2">
        <h1>Restaurants</h1>
        
        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-start h-100 w-100"
                alt="Taste of India"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">The Golden Spoon</h5>
                <p className="card-text">
                  Enjoy authentic Indian cuisine at Taste of India. Explore a
                  variety of delicious dishes from different regions of India.
                </p>
                <p className="card-text">
                  <small className="text-muted">Rating: 4.7 | Open Now</small>
                </p>
                <Link to="/restaurants/1" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        </div>
  
        <div className="card mb-4">
          <div class="row g-0">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnRzfGVufDB8fDB8fHww"
                className="img-fluid rounded-start h-100 w-100"
                alt="Pizza Paradise"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Spice Junction</h5>
                <p className="card-text">
                  Indulge in mouth-watering pizzas at Pizza Paradise. With a
                  variety of toppings and crusts, it's a pizza lover's dream.
                </p>
                <p className="card-text">
                  <small className="text-muted">Rating: 4.5 | Open Now</small>
                </p>
                <Link to="/restaurants/2" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1590987337605-84f3ed4dc29f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHN1c2hpfGVufDB8fDB8fHww"
                className="img-fluid rounded-start h-100 w-100"
                alt="Pizza Paradise"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Sushi Delight</h5>
                <p className="card-text">
                  Indulge in mouth-watering sushi at Sushi Delight. With a
                  variety of toppings and crusts, it's a sushi lover's dream.
                </p>
                <p className="card-text">
                  <small className="text-muted">Rating: 4.6 | Open Now</small>
                </p>
                <Link to="/restaurants/3" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </>
    );
  }
  