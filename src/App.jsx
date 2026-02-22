import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CropDetails from "./pages/CropDetails";
import ConditionToCrop from "./pages/ConditionToCrop";
import Result from "./pages/Result";
import CropResult from "./pages/CropResult";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crop" element={<CropDetails />} />
        <Route path="/conditions" element={<ConditionToCrop />} />
        <Route path="/result" element={<Result />} />
        <Route path="/crop-result" element={<CropResult />} />

      </Routes>
    </Layout>
  );
}

export default App;
