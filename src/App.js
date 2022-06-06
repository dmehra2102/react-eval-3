import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
     return  (
        <div className="App">
        <Navbar />
        <Login />
          <Routes>
            <Route path="/login" element={<Login><Home /></Login>}></Route>
            <Route path="/products" element={<Home />}></Route>
          </Routes>
      </div>
    ); 
}

export default App;
