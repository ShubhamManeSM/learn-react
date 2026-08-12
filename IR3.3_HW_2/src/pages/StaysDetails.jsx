import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StaysDetails = () => {
  const staysId = useParams();

  const stays = [
    {
      id: "1",
      title: "Cozy Cottage Retreat",
      type: "Cottage",
      location: "Mountain View, CA",
      rating: 4.8,
      content:
        "Escape to a charming cottage nestled in the mountains. Perfect for a peaceful getaway with stunning natural views.",
      amenities: ["Kitchen", "WiFi", "Parking"],
      price: 150,
    },
    {
      id: "2",
      title: "Beachfront Paradise Villa",
      type: "Villa",
      location: "Maui, Hawaii",
      rating: 4.9,
      content:
        "Relax and unwind in this beautiful beachfront villa. Wake up to panoramic ocean views, take a dip in the private pool, and enjoy seamless indoor-outdoor living.",
      amenities: ["Private Pool", "Ocean View", "Fitness Center"],
      price: 500,
    },
    {
      id: "3",
      title: "Urban Loft in the City",
      type: "Apartment",
      location: "New York City, NY",
      rating: 4.5,
      content:
        "Experience modern urban living in this stylish loft apartment located in the city center, close to top attractions and cafes.",
      amenities: ["Downtown Location", "Gym Access", "24/7 Security"],
      price: 250,
    },
    {
      id: "4",
      title: "Rustic Cabin in the Woods",
      type: "Cabin",
      location: "London, UK",
      rating: 4.7,
      content:
        "Reconnect with nature in this cozy rustic cabin surrounded by forests. Perfect for hiking, bonfires, and relaxation.",
      amenities: ["City View", "Fireplace", "Outdoor Seating"],
      price: 180,
    },
  ];

  const staysData = stays.find((stay) => stay.id === staysId.staysId);

  return (
    <>
      <Header />
      <main className="container my-4 text-start">
        <h1 className="display-2">{staysData.title}</h1>
        <p>Type: {staysData.type}</p>
        <p>Location: {staysData.location}</p>
        <p>Rating: {staysData.rating}</p>
        <p>{staysData.content}</p>
        <hr />


        <h2 className="mt-4 mb-3">Amenities</h2>

        <div className="p-3 shadow-sm" style={{ maxWidth: "350px" }}>
          <ul className="list-unstyled mb-3">
            {staysData.amenities.map((item, idx) => (
              <li key={idx} className="mb-1">
                • {item}
              </li>
            ))}
          </ul>
          <p className="mb-0">Price: ${staysData.price}/night</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StaysDetails;
