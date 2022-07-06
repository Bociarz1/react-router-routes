// import Browser Router in index.js
// import ROUTE and ROUTES 
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/home'
          element={<Home/>}   
        />
        
      </Routes>
    </>
  );
}

export default App;
