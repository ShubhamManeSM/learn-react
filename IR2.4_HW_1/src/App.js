import "./styles.css";

const Movies = ({movies, title}) => {
  const movieData = movies.find(movie => movie.title === title)
  return(
    <div>
      <h2>Movies Details</h2>
      <p>Title: {movieData.title}</p>
      <p>Director: {movieData.director}</p>
      <p>Genre: {movieData.genre}</p>
    </div>
  )
}

const Cafe = ({cafes, title}) => {
  const cafeInfo = cafes.find(cafe => cafe.title === title)
  return(
    <div>
      <h2>Cafe Data</h2>
      <p>Name: {cafeInfo.name}</p>
      <p>Location: {cafeInfo.location}</p>
      <p>Rating: {cafeInfo.rating}</p>
    </div>
  )
}

const Podcasts = ({podcasts, title}) => {
  const podcastDetails = podcasts.find(podcast => podcast.title === title)
  return(
    <div>
      <h2>Podcast Details</h2>
      <p>Title: {podcastDetails.title}</p>
      <p>Host: {podcastDetails.host}</p>
      <p>Listeners: {podcastDetails.listeners}</p>
    </div>
  )
}

const Books = ({books, title}) => {
  const bookData = books.find(book => book.title === title)
  return(
    <div>
      <h2>Book Data</h2>
      <p>Title: {bookData.title}</p>
      <p>Author: {bookData.author}</p>
      <p>Pages: {bookData.pages}</p>
    </div>
  )
}

const Article = ({articles, title}) => {
  const articleDetails = articles.find(article => article.title === title)
  return(
    <div>
      <h2>Article Details</h2>
      <p>Title: {articleDetails.title}</p>
      <p>Author: {articleDetails.author}</p>
      <p>Category: {articleDetails.category}</p>
    </div>
  )
}

const Blog = ({blogs, title}) => {
  const blogData = blogs.find(blog => blog.title === title)
  return(
    <div>
      <h2>Blog Data</h2>
      <p>Id: {blogData.id}</p>
      <p>Title: {blogData.title}</p>
      <p>Content: {blogData.content}</p>
      <p>Category: {blogData.category}</p>
    </div>
  )
}

export default function App() {
  const movies = [
    { title: "Movie 1", director: "Director 1", genre: "Action" },
    { title: "Movie 2", director: "Director 2", genre: "Comedy" },
    { title: "Movie 3", director: "Director 3", genre: "Drama" },
  ];

  const cafes = [
    { name: "Cafe 1", location: "Location 1", rating: 4.5 },
    { name: "Cafe 2", location: "Location 2", rating: 4.2 },
    { name: "Cafe 3", location: "Location 3", rating: 4.8 },
  ];

  const podcasts = [
    { title: "Podcast 1", host: "Host 1", listeners: 5000 },
    { title: "Podcast 2", host: "Host 2", listeners: 3000 },
    { title: "Podcast 3", host: "Host 3", listeners: 7000 },
  ];

  const books = [
    { title: "Book 1", author: "Author 1", pages: 300 },
    { title: "Book 2", author: "Author 2", pages: 250 },
    { title: "Book 3", author: "Author 3", pages: 400 },
  ];

  const articles = [
    { title: "Article 1", author: "Author 1", category: "Technology" },
    { title: "Article 2", author: "Author 2", category: "Food" },
    { title: "Article 3", author: "Author 3", category: "Fashion" },
  ];

  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },
    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },
    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Technology' }
  ];
  return (
    <main>
      <Movies movies={movies} title="Movie 2"/>
      <hr />
      <Cafe cafes={cafes} name="Cafe 2"/>
      <hr />
      <Podcasts podcasts={podcasts} title="Podcast 3" />
      <hr />
      <Books books={books} title="Book 1" />
      <hr />
      <Article articles={articles} title="Article 2" />
      <hr />
      <Blog blogs={blogPosts} title="Blog Post 2"/>
    </main>
  );
}
