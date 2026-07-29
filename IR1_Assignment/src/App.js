import "./styles.css";

const ProductPage = ({ name, price, color, description, inStock }) => {
  return (
    <div>
      <h1>Product Page</h1>
      <h2>{name}</h2>

      <img
        src="https://placehold.co/150"
        alt="Product"
      />

      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Description:</strong> {description}</p>

      <p><strong>{inStock ? 'In Stock' : 'Currently out of stock'}</strong></p>

      <p>© 2024 Apple Inc.</p>
    </div>
  );
};

export default function App() {
  return (
    <div>
     <ProductPage
      name="iPhone 15 Pro"
      price={499.99}
      color="Midnight Green"
      description="The latest flagship smartphone from Apple with cutting-edge features and stunning design."
      inStock={true}
    />
    </div>
  );
}
