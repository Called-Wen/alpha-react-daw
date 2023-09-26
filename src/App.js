import MyRouter from "./router/Index.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import { LoginProvider } from "./context/LoginContext.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginProvider>
          <Navbar />
          <MyRouter />
          <Footer />
        </LoginProvider>
      </header>
    </div>
  );
}

export default App;
