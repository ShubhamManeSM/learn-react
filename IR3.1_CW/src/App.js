import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <main className="container py-4">
      <h1>Latest Blog</h1>
      <article>
        <h2>Blog 1</h2>
        <img
          src="https://placehold.co/500x200"
          alt="blog 1"
          className="img-fluid rounded"
        />
        <p>Posted on February 22, 2024 by John Doe</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          dignissimos commodi accusamus odio voluptatum architecto maxime, quia
          harum, dolorum eius quod ipsa illo quo! Natus facere sit voluptatibus
          enim facilis.
        </p>
      </article>
      <article>
        <h2>Blog 2</h2>
        <img
          src="https://placehold.co/500x200"
          alt="blog 2"
          className="img-fluid rounded"
        />
        <p>Posted on February 18, 2024 by Jane Smith</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odit repellendus obcaecati quae aspernatur rerum hic
          vero magnam culpa, ad, error, repellat voluptatem. Totam ad, natus
          dolores modi iusto voluptatum?
        </p>
      </article>
    </main>
  );
}
