
import { Outlet } from "react-router-dom";
import "./App.css";
// import Countries from "./components/Countries";
import Country from "./components/Country";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Header />
      
      
       
      
        <Outlet/>
      
        </>
    
  );
}

export default App;
