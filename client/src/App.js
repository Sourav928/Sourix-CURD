import "./App.css";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import EditUser from "./components/EditUser";
import NavBar from "./components/NavBar";
import Sourix from "./components/Sourix";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Sourix />} />
        <Route path="/all" element={<AllUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
