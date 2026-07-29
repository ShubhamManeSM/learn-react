import "./styles.css";

const Car = ({cars}) => {
  const carListing = cars.map(car => (
    <div key={car.id}>
      <p><strong>Brand: {car.brand}</strong></p>
      <p>Price: ${car.price}</p>
    </div>
  ))
  return(
    <>
     <h2>Cars</h2>
     {carListing}
    </>
  )
}


const Hotels = ({hotels}) => {
  const hotelsListing = hotels.map(hotel => (
    <div key={hotel.id}>
      <p><strong>Name: {hotel.name}</strong></p>
      <p>Location: {hotel.location}</p>
    </div>
  ))
  return(
    <>
     <h2>Hotels</h2>
     {hotelsListing}
    </>
  )
}


const Podcasts = ({podcasts}) => {
  const podcastListing = podcasts.map(podcast => (
    <div key={podcast.id}>
      <p><strong>Title: {podcast.title}</strong></p>
      <p>Host: {podcast.host}</p>
    </div>
  ))

  return (
    <>
     <h2>Podcasts</h2>
     {podcastListing}
    </>
  )
}


const Articles = ({articles}) => {
  const articlesListing = articles.map(article => (
    <div key={article.id}>
      <p><strong>Title: {article.title}</strong></p>
      <p>{article.content}</p>
    </div>
  ))
  return(
    <>
     <h2>Articles</h2>
     {articlesListing}
    </>
  )
}


const Movies = ({movies}) => {
  const moviesListing = movies.map(movie => (
    <div key={movie.id}>
      <p><strong>Title: {movie.title}</strong></p>
      <p>Director: {movie.director}</p>
    </div>
  ))
  return(
    <>
     <h2>Movies</h2>
     {moviesListing}
    </>
  )
}

export default function App() {
  const cars = [
    {id: 1, brand: "Toyota", price: 25000},
    {id: 2, brand: "Honda", price: 30000},
    {id: 3, brand: "Ford", price: 35000}
  ]

  const hotels = [
    {id: 1, name: "Marriott", location: "New York"},
    {id: 2, name: "Hilton", location: "Los Angeles"},
    {id: 3, name: "Sheraton", location: "Chicago"}
  ]

  const podcasts = [
    {id: 1, title: "Podcast 1", host: "Host 1"},
    {id: 2, title: "Podcast 2", host: "Host 2"},
    {id: 3, title: "Podcast 3", host: "Host 3"}
  ]

  const articles = [
    {id: 1, title: "Article 1", content: "Content 1"},
    {id: 2, title: "Article 2", content: "Content 2"},
    {id: 3, title: "Article 3", content: "Content 3"}
  ]

  const movies = [
    {id: 1, title: "Movie 1", director: "Director 1"},
    {id: 2, title: "Movie 2", director: "Director 2"},
    {id: 3, title: "Movie 3", director: "Director 3"}
  ]
  return (
    <div>
      <Car cars={cars} />
      <hr />
      <Hotels hotels={hotels} />
      <hr />
      <Podcasts podcasts={podcasts} />
      <hr />
      <Articles articles={articles} />
      <hr />
      <Movies movies={movies} />
    </div>
  );
}
