import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Welcome from "./Welcome.jsx";
import Hokages from "./Hokages.jsx";
import Medical from "./Medical.jsx";
import Police from "./Police.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/hokages" element={<Hokages />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/police" element={<Police />} />


        </Routes>

      </Router>
      
    
    </>
  );
}

export default App;
