import "./styles.css";

const Header = () => {
  return(
    <div> 
    <h1>Welcome to Our Blog</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
    </div>
  )
}

const BlogDetails = ({blog}) => {
  return(
    <div>
      <h1>The Importance of Learning React</h1>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.date}</p>
      <p>{blog.message}</p>
    </div>
  )
}

const Footer = () => {
  return(
    <p>&copy; Our Blog. All rights reserved.</p>
  )
}

export default function App() {

  const blog = {
    id: 1,
    author: "John Doe",
    date: "March 1, 2024",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  }

  return (
    <>
    <Header />
    <main>
      <BlogDetails blog={blog}/>
    </main>
    <Footer />
    </>
  );
}
