import "./styles.css";

const WelcomeMessage = (props) => {
  return <h1>Welcome, {props.name}</h1>
}

const BookDetail = (props) => {
  return (
    <div>
      <h1>Book Details</h1>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Genre: {props.genre}</p>
    </div>
  )
}

const ArticleInformation = (props) => {
  return (
    <div>
      <h1>Article Information</h1>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Published Date: {props.publishedDate}</p>
    </div>
  )
}

const ProductDetails = (props) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: ${props.price}</p>
    </div>
  )
}

const EventDetails = (props) => {
  return (
    <div>
      <h1>Event Details</h1>
      <p>Title: {props.title}</p>
      <p>Location: {props.location}</p>
      <p>Date: {props.date}</p>
    </div>
  )
}

const UserProfile = (props) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {props.name}</p>
      <img src={props.img} alt={props.alt} />
    </div>
  )
}

export default function App() {
  return (
    <div>
     <WelcomeMessage name="Emily" />

     <BookDetail title="To Kill a Mockingbird" author="Harper Lee" genre="Classic"/>

     <ArticleInformation title="The Power of Habit" author="Charles Duhigg" publishedDate="March 1,2024" />

     <ProductDetails name="Smartphone" brand="Samsung" price={799.99} />

     <EventDetails title="Tech Conference 2024" location="San Francisco" date="April 15, 2024" />

     <UserProfile name="Chris" img="https://placehold.co/150" alt="placehold"/>
    </div>
  );
}
