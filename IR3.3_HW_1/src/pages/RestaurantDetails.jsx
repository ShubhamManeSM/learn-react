import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const restaurants = [
    {
      id: "1",
      title: "The Golden Spoon",
      cuisine: "Italian",
      location: "123 Main Street, Cityville",
      rating: 4.5,
      content: "Experience authentic Italian cuisine in a cozy atmosphere.",
      menu: [
        { name: "Spaghetti Carbonara", price: 15 },
        { name: "Margherita Pizza", price: 12 },
        { name: "Tiramisu", price: 8 }
      ]
    },
    {
      id: "2",
      title: "Spice Junction",
      cuisine: "Indian",
      location: "456 Elm Street, Townsville",
      rating: 4.2,
      content: "Savor the flavors of India with our traditional dishes.",
      menu: [
        { name: "Chicken Tikka Masala", price: 14 },
        { name: "Vegetable Biryani", price: 12 },
        { name: "Gulab Jamun", price: 6 }
      ]
    },
    {
      id: "3",
      title: "Sushi Delight",
      cuisine: "Japanese",
      location: "789 Oak Avenue, Villageland",
      rating: 4.7,
      content: "Enjoy exquisite Japanese sushi prepared by master chefs.",
      menu: [
        { name: "California Roll", price: 10 },
        { name: "Sashimi Platter", price: 18 },
        { name: "Green Tea Ice Cream", price: 5 }
      ]
    }
  ];

  const restaurantData = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );

  if (!restaurantData) {
    return (
      <>
        <Header />
        <main className="container my-4 text-start">
          <h2>Restaurant not found</h2>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container my-4 text-start">
        <h1 className="display-2">{restaurantData.title}</h1>
        <p>Cuisine: {restaurantData.cuisine}</p>
        <p>Location: {restaurantData.location}</p>
        <p>Rating: {restaurantData.rating}</p>
        <p>{restaurantData.content}</p>
        <hr />

        <h2 className="mt-4 mb-3">Menu</h2>
        <div className="row">
          {restaurantData.menu.map((item, idx) => (
            <div className="col-md-4 mb-3" key={idx}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.name}</h5>
                  <p className="card-text mb-0">Price: ${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RestaurantDetails;
