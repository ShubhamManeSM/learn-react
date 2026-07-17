import "./styles.css";

const WelcomeMessage = () => {
  return <h1>Discover the World of JSX!</h1>;
};

const GreetActor = () => {
  const actor = "Tom Hardy";
  return <h1>Welcome, {actor} fans!</h1>;
};

const LinkTag = () => {
  const url = "https://reactjs.org";
  return <a href={url}>Explore React Documentaion</a>;
};

const VideoPlayer = () => {
  const videoUrl = "https://www.example.com/video.mp4";
  return (
    <div>
    <video width="300" height="200" controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
    </div>
  );
};

const MovieDetails = () => {
  const movie = {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    rating: "PG-13",
    duration: "2h 22min",
  };
  return (
    <div>
      <h2>Movie Details</h2>
      <p>
        <strong>Title:</strong>
        {movie.title}
      </p>
      <p>
        <strong>Director:</strong>
        {movie.director}
      </p>
      <p>
        <strong>Year:</strong>
        {movie.year}
      </p>
      <p>
        <strong>Rating:</strong>
        {movie.rating}
      </p>
      <p>
        <strong>Duration:</strong>
        {movie.duration}
      </p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <WelcomeMessage />

      <GreetActor />

      <LinkTag />

      <VideoPlayer />

      <MovieDetails />
    </div>
  );
}
