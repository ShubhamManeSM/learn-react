import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const userData = {
  john_doe: {
    fullName: "John Doe",
    bio: "Software Developer | Tech Enthusiast",
    imageUrl: "https://placehold.co/250x250",
    followers: 1000,
    following: 500,
    posts: 50,
  },
  jane_smith: {
    fullName: "Jane Smith",
    bio: "Graphic Designer | Nature Lover",
    imageUrl: "https://placehold.co/250x250",
    followers: 800,
    following: 300,
    posts: 40,
  },
  alice_wonder: {
    fullName: "Alice Wonder",
    bio: "Travel Blogger | Foodie",
    imageUrl: "https://placehold.co/250x250",
    followers: 1200,
    following: 600,
    posts: 60,
  },
};

const ProfileDetails = () => {
  const { username } = useParams();
  const user = userData[username];

  if (!user) {
    return (
      <>
        <Header />
        <div className="text-center my-5">
          <h3>User not found</h3>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container py-5 text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={user.imageUrl}
              alt={user.fullName}
              className="img-fluid mb-3"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-md-6 text-start">
            <h2>{user.fullName}</h2>
            <p>@{username}</p>
            <p>{user.bio}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Posts: {user.posts}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfileDetails;
