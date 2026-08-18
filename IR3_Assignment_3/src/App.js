import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/PostList";

export default function App() {
  return (
    <>
      <Header />
      <PostList />
      <Footer />
    </>
  );
}
