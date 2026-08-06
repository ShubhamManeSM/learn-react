import "./styles.css";

const Books = ({books}) => {
  const sciFicBooks = books.filter(book => book.genre === "Science Fiction")
  const bookListing = sciFicBooks.map(book => (
    <div key={book.id}>
      <h2>Title: {book.title}</h2>
      <p>Genre: {book.genre}</p>
    </div>
  ))
  return(
    <>
     <h2>Books Details</h2>
     {bookListing}
    </>
  )
}

const Admin = ({admin}) => {
  const adminRole = admin.filter(admin => admin.role === "Admin")
  const roleListing = adminRole.map(admin => (
    <div key={admin.id}>
      <h2>Name: {admin.name}</h2>
      <p>Role: {admin.role}</p>
    </div>
  ))
  return(
    <>
    <h2>User Details</h2>
    {roleListing}
    </>
  )
}

const Product = ({products}) => {
  const productPrice = products.filter(product => product.price > 100)
  const productListing = productPrice.map(product => (
    <div key={product.id}>
      <h2>Name: {product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Features: {product.features.color}</p>
      <p>Features: {product.features.isWaterProof ? 'Yes' : 'No'}</p>
    </div>
  ))
  return(
    <>
    <h2>Product Details</h2>
    {productListing}
    </>
  )
}

const Cities = ({cities}) => {
  const citiesPopulation = cities.filter(city => city.population > 100000)
  const citiesListing = citiesPopulation.map(city => (
    <div key={city.id}>
      <h2>Name: {city.name}</h2>
      <p>Population: {city.population}</p>
    </div>
  ))
  return(
    <>
     <h2>Population Details</h2>
     {citiesListing}
    </>
  )
}

const Movies = ({movies}) => {
  const moviesReleased = movies.filter(movie => movie.releaseYear > 2015)
  const moviesListing = moviesReleased.map(movie => (
    <div key={movie.id}>
      <h2>Title: {movie.title}</h2>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  ))
  return(
    <>
     <h2>Movie Details</h2>
     {moviesListing}
    </>
  )
}

const Podcasts = ({podcasts}) => {
  const podcastsFeatured = podcasts.filter(podcast => podcast.featured === true)
  const podcastListing =  podcastsFeatured.map(podcast => (
    <div key={podcast.id}>
      <h2>Title: {podcast.title}</h2>
      <p>Host: {podcast.host.join(", ")}</p>
      <p>Featured: {podcast.featured ? 'true' : 'false'}</p>
    </div>
  ))
  return(
    <>
     <h2>Podcasts</h2>
     {podcastListing}
    </>
  )
}


const MoviesDuration = ({ movies }) => {
  const filteredMovies = movies.filter(movie => movie.releaseYear >= 2000);

  const totalDuration = filteredMovies.reduce((sum, movie) => sum + movie.duration, 0);

  const averageDuration = filteredMovies.length > 0
    ? (totalDuration / filteredMovies.length).toFixed(2)
    : 0;

  const moviesListing = filteredMovies.map(movie => (
    <div key={movie.id}>
      <h3>Title: {movie.title}</h3>
      <p>Duration: {movie.duration} minutes</p>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  ));

  return (
    <>
      <h2>Movies Released in 2000 and above</h2>
      {moviesListing}
      <p>Average Duration: {averageDuration} minutes</p>
    </>
  );
};


const Task = ({tasks}) => {
  const filteredTask = tasks.filter(task => task.completed === true)
  const tasksListing = filteredTask.map(task => (
    <div key={task.id}>
      <h2>Description: {task.description}</h2>
      <p>Completed: {task.completed ? 'true' : 'false'}</p>
    </div>
  ))
  return(
    <>
     <h2>Tasks</h2>
     {tasksListing}
    </>
  )
}

const TotalDistance = ({vehicles}) => {
  const totalDistance = vehicles.reduce((total, vehicle) => total + vehicle.distance, 0);

  return (
    <div>
      <h2>Total Distance Traveled</h2>
      <p>{totalDistance} km</p>
    </div>
  );
};

const TotalRevenue = ({sales}) => {
  const totalRevenue = sales.reduce((total, sale) => {
    return total + sale.price * sale.quantity;
  }, 0);

  return (
    <div>
      <h2>Total Revenue</h2>
      <p>{totalRevenue.toLocaleString()}</p>
    </div>
  );
};

export default function App() {
  const books = [
    { id: 1, title: "Dune", genre: "Science Fiction" },
    { id: 2, title: "Neuromancer", genre: "Science Fiction" },
    { id: 3, title: "Foundation", genre: "Sci-fi" },
  ];

  const users = [
    { id: 1, name: "Alice", role: "User" },
    { id: 2, name: "Bob", role: "Admin" },
    { id: 3, name: "Charlie", role: "User" },
    { id: 4, name: "John", role: "Admin" },
  ];

  const products = [
    { id: 1, name: "Laptop", price: 1200, features: {color: "green", isWaterProof: false} },
    { id: 2, name: "Smartphone", price: 800, features: {color: "blue", isWaterProof: true} },
    { id: 3, name: "Headphones", price: 150, features: {color: "silver", isWaterProof: false} },
  ];

  const cities = [
    { id: 1, name: "New York", population: 8500000 },
    { id: 2, name: "Los Angeles", population: 539900 },
    { id: 3, name: "Chicago", population: 2700000 },
  ];

  const movies = [
    { id: 1, title: "Inception", releaseYear: 2010 },
    { id: 2, title: "La La Land", releaseYear: 2016 },
    { id: 3, title: "Interstellar", releaseYear: 2014 },
    { id: 4, title: "Dune 2", releaseYear: 2024 },
  ];

  const podcasts = [
    { id: 1, title: "Tech Talk", host: ["host 1"], featured: true },
    { id: 2, title: "Business Insights", host: ["host 2"], featured: false },
    { id: 3, title: "Science Hour", host: ["host 3", "host 4"], featured: true },
  ];

  const movie = [
    { id: 1, title: "The Matrix", duration: 136, releaseYear: 1999 },
    { id: 2, title: "Inception", duration: 148, releaseYear: 2010 },
    { id: 3, title: "Avatar", duration: 162, releaseYear: 2009 },
  ];

  const tasks = [
    { id: 1, description: "Complete project proposal", completed: true },
    { id: 2, description: "Review client feedback", completed: false },
    { id: 3, description: "Submit final report", completed: true },
  ];

  const vehicles = [
    { id: 1, name: "Car", distance: 150 },
    { id: 2, name: "Bicycle", distance: 10 },
    { id: 3, name: "Motorcycle", distance: 75 },
  ];

  const sales = [
    { id: 1, product: "Widget A", price: 25, quantity: 10 },
    { id: 2, product: "Gadget B", price: 50, quantity: 5 },
    { id: 3, product: "Tool C", price: 30, quantity: 8 },
  ];
  return (
    <div>
      <Books books={books} />
      <hr />
      <Admin admin={users} />
      <hr />
      <Product products={products} />
      <hr />
      <Cities cities={cities} />
      <hr />
      <Movies movies={movies} />
      <hr />
      <Podcasts podcasts={podcasts} />
      <hr />
      <MoviesDuration movies={movie} />
      <hr />
      <Task tasks={tasks} />
      <hr />
      <TotalDistance vehicles={vehicles} />
      <hr />
      <TotalRevenue sales={sales} />
    </div>
  );
}
