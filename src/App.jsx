import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Services from "./pages/Services";
import Contact from "./Components/Contact";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Contact/>}/>
        <Route path="service" element={<Services/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
