import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Services from "./pages/Services";


import ContactLast from "./Components/ContactLast";
import Contacts from "./pages/Contacts";






const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
      
        <Route path="/" element={<Services/>}/>
        <Route path="Contact" element={<ContactLast/>} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
