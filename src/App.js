import Footer from "./components/Footers";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Todo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
