import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
