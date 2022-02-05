import { Routes, Route } from "react-router-dom";

import Header from "./menu/Header";
import Home from "./Home/Home";
import News from "./News/News";
import Footer from "./menu/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news/*' element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;