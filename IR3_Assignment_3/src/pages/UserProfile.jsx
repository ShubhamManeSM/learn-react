import Header from "../components/Header";
import Footer from "../components/Footer";

const UserProfile = () => {
  const user = {
    fullName: "John Doe",
    username: "john_doe",
    bio: "Software Developer | Tech Enthusiast",
    imageUrl: "https://placehold.co/150x150",
    followers: 1000,
    following: 500,
    posts: 50,
  };

  return (
    <>
      <Header />
      <main className="container py-5 text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={user.imageUrl}
              alt={user.fullName}
              className="img-fluid rounded-circle mb-3"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-md-6 text-start">
            <h2>{user.fullName}</h2>
            <p className="text-muted">@{user.username}</p>
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

export default UserProfile;
