import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContainer from "./components/containers/PageContainer";
import Navbar from "./components/navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
