import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainContainer from "./views/MainContainer.jsx";
import CatalogContainer from "./views/CatalogContainer.jsx";
import NewsContainer from "./views/NewsContainer.jsx";
import ContactContainer from "./views/ContactContainer.jsx";
import SpecialContainer from "./views/SpecialContainer.jsx";
import DiscountContainer from "./views/DiscountContainer.jsx";

import "antd/dist/antd.css";
import "./style/Style.scss";
import ActualContainer from "./views/ActualContainer.jsx";
import RecommendContainer from "./views/RecommendContainer.jsx";
import CategoryContainer from "./views/CategoryContainer.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
            <Routes>
              <Route path="" element={<MainContainer />} />
              <Route path="catalog" element={<CatalogContainer />} />
                <Route path="category" element={<CategoryContainer/>}/>
              <Route path="discount" element={<DiscountContainer />} />
              <Route path="special" element={<SpecialContainer />} />
              <Route path="popular" element={<ContactContainer />} />
              <Route path="news" element={<NewsContainer />} />
              <Route path="contact" element={<ContactContainer />} />
              <Route path="actual" element={<ActualContainer />} />
              <Route path="recommend" element={<RecommendContainer />} />
            </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
