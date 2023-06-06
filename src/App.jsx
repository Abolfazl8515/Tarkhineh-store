import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import HomePage from "./pages/HomePage";
import BranchPage from "./pages/BranchPage";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/branch" element={<BranchPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
