import "./styles.css";

const Header = () => {
  return (
    <header>
      <h1>Welcome to Our Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

const SmartPhoneDetails = ({smartphone}) => {
  return (
    <div>
      <h1>SmartPhone</h1>
      <p>Category: {smartphone.category}</p>
      <p>Price: ${smartphone.price}</p>
      <p>Stock: {smartphone.stock}</p>
    </div>
  )
}

const Footer = () => {
  return(
    <p>&copy; 2024 Our Company. All rights reserved.</p>
  )
}

export default function App() {
  const smartPhoneData = {
    id: 1,
    category: "Electronics",
    price: 799.99,
    stock: 100
  }

  return (
    <>
    <Header />
    <main>
      <SmartPhoneDetails smartphone={smartPhoneData} />
    </main>
    <Footer />
    </>
  );
}
