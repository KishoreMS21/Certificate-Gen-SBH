import Certificate from "./Pages/Certificate/Certificate";
import Generate from "./Pages/Generation/Generate";
// Import Login component if needed

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Verify from "./Pages/Verify/Verify";

function App() {
  const studentName = "Kishore Taylor";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Generate />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/verify" element={<Verify/>} />

        {/* If you need a Login component route, you can add it here */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
