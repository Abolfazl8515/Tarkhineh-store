import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Layout>
          <Route path="/" element={<HomePage />} />
        </Layout>
      </Routes>
    </div>
  );
};

export default App;
