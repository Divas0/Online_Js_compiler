import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";


import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="bottom-right" theme="dark" />
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/compiler/:urlId" element={<Compiler />} />
          <Route path="*" element={<h1> Not Found</h1>} />
        </Routes>
      
    </>
  );
}

export default App;