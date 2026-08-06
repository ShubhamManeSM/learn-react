import "./styles.css";

const TotalCalories = ({exercises}) => {
  const totalCalories = exercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,0);

  return (
    <div>
      <h2>Total Calories Burned</h2>
      <p>{totalCalories} kcal</p>
    </div>
  );
};

const TotalHighRatedDuration = ({songs}) => {
  const totalDuration = songs
    .filter(song => song.rating > 3.9)
    .reduce((sum, song) => sum + song.duration, 0);

  return (
    <div>
      <h2>Total Duration of Highly Rated Songs</h2>
      <p>{totalDuration} seconds</p>
    </div>
  );
};

const BookDetails = ({ books }) => {
  const gatsbyBook = books.find(book => book.title === "The Great Gatsby");

  return (
    <div>
      <h2>Book Details</h2>
      {gatsbyBook ? (
        <div>
          <p><strong>Title:</strong> {gatsbyBook.title}</p>
          <p><strong>Author:</strong> {gatsbyBook.author}</p>
          <p><strong>Genre:</strong> {gatsbyBook.genre}</p>
        </div>
      ) : (
        <p>"The Great Gatsby" not found.</p>
      )}
    </div>
  );
};

const SongDetails = ({ songs }) => {
  const song = songs.find(song => song.title === "Bohemian Rhapsody");

  return (
    <div>
      <h2>Song Details</h2>
      {song ? (
        <div>
          <p><strong>Title:</strong> {song.title}</p>
          <p><strong>Artist:</strong> {song.artist}</p>
          <p><strong>Genre:</strong> {song.genre}</p>
        </div>
      ) : (
        <p>"Bohemian Rhapsody" not found.</p>
      )}
    </div>
  );
};

const CityPopulation = ({ cities }) => {
  const paris = cities.find(city => city.name === "Paris");

  return (
    <div>
      <h2>City Population</h2>
      {paris ? (
        <p>
          <strong>Paris Population:</strong> {paris.population.toLocaleString()}
        </p>
      ) : (
        <p>City "Paris" not found.</p>
      )}
    </div>
  );
};

const ProductDetails = ({ products }) => {
  const product = products.find(p => p.id === 3);

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div>
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      ) : (
        <p>Product with ID 3 not found.</p>
      )}
    </div>
  );
};

const StudentDetails = ({ students }) => {
  const student = students.find(s => s.name === "Charlie");

  return (
    <div>
      <h2>Student Details</h2>
      {student ? (
        <div>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Math: {student.grades.math}</p>
          <p>Science: {student.grades.science}</p>
          <p>English: {student.grades.english}</p>
        </div>
      ) : (
        <p>Student "Charlie" not found.</p>
      )}
    </div>
  );
};

const OrderDetails = ({ orders }) => {
  const order = orders.find(order => order.customer === "Alice Smith");

  return (
    <div>
      <h2>Order Details</h2>
      {order ? (
        <div>
          <p>Order ID: {order.id}</p>
          <p>Customer: {order.customer}</p>
          <p>Total Amount: ${order.totalAmount}</p>
          <p>Products:</p>
          {order.products.map(product => (
            <div key={product.id}>
              <p>Product Name: {product.name}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Order for "Alice Smith" not found.</p>
      )}
    </div>
  );
};

const EmployeeDetails = ({ employees }) => {
  const employee = employees.find(emp => emp.id === 1);

  return (
    <div>
      <h2>Employee Details</h2>
      {employee ? (
        <div>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Position: {employee.position}</p>
          <p>Department Name: {employee.department.name}</p>
          <p>Department Location: {employee.department.location}</p>
        </div>
      ) : (
        <p>Employee with ID 1 not found.</p>
      )}
    </div>
  );
};

const TotalItemsInStock = ({ store }) => {
  const totalInStock = store.categories.filter(cat => cat.itemDetail.inStock).length;

  return (
    <div>
      <h2>{store.name} - Total Items In Stock</h2>
      <p>{totalInStock}</p>
    </div>
  );
};

export default function App() {
  const exercises = [
    { id: 1, name: "Running", caloriesBurned: 300 },
    { id: 2, name: "Cycling", caloriesBurned: 200 },
    { id: 3, name: "Swimming", caloriesBurned: 400 },
  ];

  const songs = [
    { id: 1, title: "Song A", duration: 180, rating: 4.2 },
    { id: 2, title: "Song B", duration: 210, rating: 3.8 },
    { id: 3, title: "Song C", duration: 150, rating: 4.5 },
  ];

  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  ];

  const song = [
    { id: 1, title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" },
    { id: 2, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { id: 3, title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },
  ];

  const cities = [
    { id: 1, name: "New York", population: 8500000 },
    { id: 2, name: "Paris", population: 2200000 },
    { id: 3, name: "Tokyo", population: 3770000 },
  ];

  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Headphones", price: 60 },
  ];

  const students = [
    { id: 1, name: "Alice", age: 20, grades: { math: 90, science: 85, english: 92 } },
    { id: 2, name: "Bob", age: 22, grades: { math: 78, science: 80, english: 85 } },
    { id: 3, name: "Charlie", age: 21, grades: { math: 95, science: 88, english: 94 } },
  ];

  const orders = [
    { id: 1, customer: "John Doe", totalAmount: 150, products: [{ id: 101, name: "Widget", quantity: 2 }, { id: 102, name: "Gadget", quantity: 1 }] },
    { id: 2, customer: "Alice Smith", totalAmount: 200, products: [{ id: 103, name: "Tool", quantity: 1 }, { id: 104, name: "Device", quantity: 3 }] },
    { id: 3, customer: "Bob Johnson", totalAmount: 100, products: [{ id: 105, name: "Accessory", quantity: 5 }] },
  ];

  const employees = [
    { id: 1, name: "Jane Doe", position: "Software Engineer", department: { name: "Engineering", location: "Building A" } },
    { id: 2, name: "Sam Smith", position: "Marketing Manager", department: { name: "Marketing", location: "Building B" } },
    { id: 3, name: "Mike Johnson", position: "HR Specialist", department: { name: "Human Resources", location: "Building C" } },
  ];

  const store = {
    name: "Tech Emporium",
    categories: [
      { id: 1, name: "Electronics", itemDetail: { id: 101, product: "Laptop", inStock: true } },
      { id: 2, name: "Accessories", itemDetail: { id: 201, product: "Headphones", inStock: true } },
      { id: 3, name: "Electronics", itemDetail: { id: 301, product: "Heater", inStock: false } },
    ]
  };
  return (
    <div>
      <TotalCalories exercises={exercises} />
      <hr />
      <TotalHighRatedDuration songs={songs} />
      <hr />
      <BookDetails books={books} />
      <hr />
      <SongDetails songs={song} />
      <hr />
      <CityPopulation cities={cities} />
      <hr />
      <ProductDetails products={products} />
      <hr />
      <StudentDetails students={students} />
      <hr />
      <OrderDetails orders={orders} />
      <hr />
      <EmployeeDetails employees={employees} />
      <hr />
      <TotalItemsInStock store={store} />
    </div>
  );
}
