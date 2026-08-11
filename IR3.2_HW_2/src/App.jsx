import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main className="container py-4">
    <h1>Latest Listings</h1>
    <div>
      <img
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww"
        alt="house"
        className="img-fluid rounded mt-2"
      />
      <h3 className="mt-2">Cozy Loft in the City Center</h3>
      <p class="text-muted">
        Entire loft &middot; 2 guests &middot; 1 bedroom &middot; 1 bed
        &middot; 1 bath
      </p>
      <p className="mt-2">
        Enjoy your stay in this stylish loft apartment located in the heart of
        the city. Close to restaurants, shops, and attractions
      </p>
      <p>$120 per night</p>
    </div>
    <div>
      <img
        src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGF8ZW58MHx8MHx8fDA%3D"
        alt="house"
        className="img-fluid rounded mt-2"
      />
      <h3 className="mt-2">Beachfront Villa with Stunning Views</h3>
      <p className="text-muted">
        Entire villa &middot; 6 guests &middot; 3 bedrooms &middot; 3 beds
        &middot; 2 baths
      </p>
      <p className="mt-2">
        Relax and unwind in this beautiful beachfront villa. Wake up to
        panoramic ocean views, take a dip in the private pool, and enjoy
        seamless indoor-outdoor living.
      </p>
      <p>$300 per night</p>
    </div>
  </main>
  )
}

export default App
