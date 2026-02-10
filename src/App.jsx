import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Admin from "./Pages/AdminPageFolder/AdminPage";
import OfficeOps from "./Pages/OfficeOpsFolder/OfficeOps";
import EbayHelper from "./Pages/EbayHelperFolder/EbayHelper";
import ImageOps from "./Pages/ImageRestoreFolder/Restore_Images"; 
import "./App.css";
import Zenith from "./Pages/Zenith";

const App = () => {
  return (
    <main className="h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
          <Route path="/officeops" element={<OfficeOps />} />
          <Route path="/ebayhelper" element={<EbayHelper />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/image_restore" element={<ImageOps />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
