import "./styles.css";

const WelcomeBanner = (props) => {
  return <h1>Welcome to {props.name} App!</h1>
}

const RecipeDetails = (props) => {
  return (
    <div>
      <h1>Recipe Details</h1>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Rating: {props.rating}</p>
    </div>
  )
}

const MovieInformation = (props) => {
  return (
    <div>
      <h1>Movie Details</h1>
      <p>Title: {props.title}</p>
      <p>Director: {props.director}</p>
      <p>Release Date: {props.releaseDate}</p>
    </div>
  )
}

const ProductFeatures = (props) => {
  return (
    <div>
      <h1>Product Features</h1>
      <p>Name: {props.name}</p>
      <p>Color: {props.color}</p>
      <p>Size: {props.size}</p>
    </div>
  )
}

const UserProfileCard = (props) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <WelcomeBanner name="My Recipe" />

      <RecipeDetails title="Chocalate Cake" author="Baker Betty" rating={4.7} />

      <MovieInformation title="The GodFather" director="Francis Ford Coppola" releaseDate="March 24, 1972" />

      <ProductFeatures name="Smartwatch" color="Black" size="Medium" />

      <UserProfileCard name="Alice" email="alice@example.com" role="Admin" />
    </div>
  );
}
