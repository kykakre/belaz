import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainContainer from "./views/MainContainer.jsx";
import CatalogContainer from "./views/CatalogContainer.jsx";
import NewsContainer from "./views/NewsContainer.jsx";
import ContactContainer from "./views/ContactContainer.jsx";
import "./style/Style.scss"
function App() {


  return (
      <BrowserRouter>
        <div className="app">
          <Header/>

              <Routes>
                  <Route path="" element={<MainContainer />} />
                  <Route path="catalog" element={<CatalogContainer />} />
                  <Route path="news" element={<NewsContainer />} />
                  <Route path="contact" element={<ContactContainer />} />
              </Routes>
        <Footer/>
        </div>
      </BrowserRouter>

  )
}

export default App
