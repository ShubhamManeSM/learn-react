import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    username: "john_doe",
    imgUrl: "https://placehold.co/400x200?text=Hello+World",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    username: "jane_smith",
    imgUrl: "https://placehold.co/400x200?text=Smiling+Jane",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    username: "alice_wonder",
    imgUrl: "https://placehold.co/400x200?text=Alice+In+Wonder+Park",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const PostList = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="border rounded p-3 mb-4 shadow-sm bg-white"
        >
          <Link to={`/profile/${post.username}`} className="fw-semibold">
            {post.username}
          </Link>
          <div className="my-3">
            <img
              src={post.imgUrl}
              alt={post.username}
              className="img-fluid rounded"
              style={{ maxWidth: "400px" }}
            />
          </div>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
