// import react from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountDeletion from "./pages/AccountDeletion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/account-deletion" element={<AccountDeletion />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
