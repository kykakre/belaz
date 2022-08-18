import {BrowserRouter, Router, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainContainer from "./views/MainContainer.jsx";
import CatalogContainer from "./views/CatalogContainer.jsx";
import NewsContainer from "./views/NewsContainer.jsx";
import ContactContainer from "./views/ContactContainer.jsx";
function App() {


  return (
      <BrowserRouter>
        <div className="app">
          <Header/>
          <Routes>
            <Router path="" element={<MainContainer />} />
              <Router path="catalog" element={<CatalogContainer />} />
              <Router path="news" element={<NewsContainer />} />
              <Router path="contact" element={<ContactContainer />} />


          </Routes>
        <Footer/>
        </div>
      </BrowserRouter>

  )
}

export default App
