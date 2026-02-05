import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
 
import OfficeOps from "./Pages/OfficeOpsFolder/OfficeOps";
import "./App.css";
import Zenith from "./Pages/Zenith";

const App = () => {
  return (
    <main className="h-screen w-screen ">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
      
          <Route path="/officeops" element={<OfficeOps />} />
       
          
        </Routes>
      </Router>
    </main>
  );
};

export default App;
