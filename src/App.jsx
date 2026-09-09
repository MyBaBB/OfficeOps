import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Admin from "./Pages/AdminPageFolder/AdminPage";
import OfficeOps from "./Pages/OfficeOpsFolder/OfficeOps";
import EbayHelper from "./Pages/EbayHelperFolder/EbayHelper";
import ImageOps from "./Pages/ImageRestoreFolder/Restore_Images";
import "./App.css";
import Zenith from "./Pages/Zenith";
import CompTech from "./Pages/CompTechFolder/CompTech";
import OpenSource from "./Pages/OpenSourcePageFolder/OpenSourcePage";
const App = () => {
  return (
    <main className="h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
          <Route path="/*" element={<Zenith />} />
          <Route path="/officeops" element={<OfficeOps />} />
          <Route path="/ebayhelper" element={<EbayHelper />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/comptech" element={<CompTech />} />
          <Route path="/image_restore" element={<ImageOps />} />
          <Route path="/open_source" element={<OpenSource />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
