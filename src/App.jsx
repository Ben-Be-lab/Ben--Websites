import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import ServicesCard from "./pages/ServicesCard";
import OurServices from "./pages/OurServices";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
      
          <Route index element={<ServicesCard />} />

    
          <Route path="our-services" element={<OurServices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
