import Footer from "../component/Footer";
import Header from "../component/Header";
export default function Reataurants() {
    return (
        <>
        <Header/>
      <main className="container py-2">
        <h1>Restaurants</h1>
        
        <div class="card mb-4">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="img-fluid rounded-start h-100 w-100"
                alt="Taste of India"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Taste of India</h5>
                <p class="card-text">
                  Enjoy authentic Indian cuisine at Taste of India. Explore a
                  variety of delicious dishes from different regions of India.
                </p>
                <p class="card-text">
                  <small class="text-muted">Rating: 4.7 | Open Now</small>
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="card mb-4">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnRzfGVufDB8fDB8fHww"
                class="img-fluid rounded-start h-100 w-100"
                alt="Pizza Paradise"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Pizza Paradise</h5>
                <p class="card-text">
                  Indulge in mouth-watering pizzas at Pizza Paradise. With a
                  variety of toppings and crusts, it's a pizza lover's dream.
                </p>
                <p class="card-text">
                  <small class="text-muted">Rating: 4.5 | Open Now</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </>
    );
  }
  