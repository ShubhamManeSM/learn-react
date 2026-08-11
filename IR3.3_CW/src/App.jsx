import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
    <main className="container py-4">
      <h1>Latest Blogs</h1>
      <article>
        <h2>Blog 1</h2>
        <img src="https://placehold.co/500x200" alt="blog 1" className="img-fluid rounded" />
        <p>Posted on February 22, 2024 by John Doe</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiores quia repellendus iusto iure nemo, provident cupiditate eveniet ducimus quam accusamus fugit, molestiae minima commodi neque placeat corporis nostrum et ad numquam id sapiente repellat. Vitae illum eveniet officiis quia at, architecto expedita ex iste pariatur animi eius, corrupti asperiores, sapiente laborum harum aut blanditiis unde fuga eum voluptas facere. Sunt quo dolorem ut quae animi hic minus. Obcaecati culpa libero repellat nesciunt mollitia iusto omnis inventore vel et temporibus!</p>
      </article>
      <article>
        <h2>Blog 2</h2>
        <img src="https://placehold.co/500x200" alt="blog 2" className="img-fluid rounded" />
        <p>Posted on February 18, 2024 by Jane Smith</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci impedit dolore, rem reprehenderit veritatis expedita! Nostrum quos eius sequi hic quae optio? Quisquam, sed cum neque natus suscipit commodi. Nemo nobis nisi molestiae excepturi debitis, ullam neque explicabo?</p>
      </article>
    </main>
    <Footer />
    </>
  )
}

export default App
