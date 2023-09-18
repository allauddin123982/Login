import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import HomePublic from "./components/HomePublic";
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
        <Route path={'/'} element={<HomePublic/>}></Route>
          <Route path={'/register'} element={<SignUp/>}></Route>
          <Route path={'/login'} element={<Login/>}></Route>
          <Route path={'/home/:namee'} element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
