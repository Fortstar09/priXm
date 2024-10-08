import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { UploadRant } from "./pages/UploadRant";
import ViewRants from "./pages/ViewRants";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rants" element={<ViewRants />} />
        <Route path="/addrant" element={<UploadRant />} />
      </Routes>
    </>
  );
}

export default App;
