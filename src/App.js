import MyRouter from "./router/Index.js"
import Navbar from './components/Navbar';
import Footer from "./components/Footer.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <MyRouter />

        <Footer />
      </header>
    </div>
  );
}

export default App;
