import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import post from "./models/post";

function App() {
  const allPosts = post.map((article) => {
    return <Posts article={article} />;
  });
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="feed">{allPosts}</div>
      <Footer />
    </div>
  );
}

export default App;
