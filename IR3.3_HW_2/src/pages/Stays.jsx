import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Stays(){
    return(
        <>
        <Header/>
        <main className="container py-4 text-start">
            <h1>Stays</h1>

            <div class="card mb-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://images.unsplash.com/photo-1625305903672-3698af884915?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlJTIwd2l0aCUyMGElMjB2aWV3fGVufDB8fDB8fHww" alt="Luxurious Taj Mahal View Apartment" className="img-fluid h-100 w-100" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Cozy Cottage Retreat</h5>
                            <p class="card-text">
                               Wake up to a breathtaking view of the Taj Mahal from this luxurious apartment. Explore the rich history and beauty of this iconic monument right from your window. 
                            </p>
                            <p className="text-muted">
                                <small>Last updated 3 mins ago</small>
                            </p>
                            <Link to="/stays/1" className="btn btn-primary">View More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://images.unsplash.com/photo-1655183689956-59ef30f95db3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlYXNpZGUlMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D" className="img-fluid h-100 w-100" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Beachfront Paradise Villa</h5>
                            <p class="card-text">
                               Escape to nature with this cozy mountain retreat. Enjoy tranquality and stunning views while being surrounded by lush forests and fresh mountain air. 
                            </p>
                            <p className="text-muted">
                                <small>Last updated 10 mins ago</small>
                            </p>
                            <Link to="/stays/2" className="btn btn-primary">View More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://images.unsplash.com/photo-1657465897476-fbd54051f72a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlJTIwaW4lMjB0aGUlMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D" className="img-fluid h-100 w-100" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Urban Loft in the City</h5>
                            <p class="card-text">
                               Indulge in luxury with this stunning seaside villa. Relax on pristine beaches, take a dip in the private pool, and soak up the sun in this exclusive coastal retreat. 
                            </p>
                            <p className="text-muted">
                                <small>Last updated 15 mins ago</small>
                            </p>
                            <Link to="/stays/3" className="btn btn-primary">View More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYWxsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D" className="img-fluid h-100 w-100" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Rustic Cabin in the Woods</h5>
                            <p class="card-text">
                               Experience urban living at its finest with this modern loft. Conveniently located in the city center, it offers style, comfort, and easy access to dining and entertainment options. 
                            </p>
                            <p className="text-muted">
                                <small>Last updated 20 mins ago</small>
                            </p>
                            <Link to="/stays/4" className="btn btn-primary">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}