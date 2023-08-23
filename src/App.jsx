import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import "./App.css";

import { LoremIpsum } from "./components/LoremIpsum/LoremIpsum";
import Navbar from "./components/Navbar/Navbar";
import NavbarBreadCrumb from "./components/Navbar/NavbarBreadCrumb";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import Footer from "./components/Navbar/Footer";
import Product from "./components/ProductsPage/Product";
import Profile from "./components/Profile/Profile";
import Login from "./components/LoginPage/Login";
import NotFound from "./components/NotFound/NotFound";
import MyLine from "./components/Charts/Line";
import MyPie from "./components/Charts/Pie";


const HomePage = () => {
  const { scrollYProgress } = useScroll();
  return(
    <div>
      <div className="container-sm">
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>
      </div>
      <Navbar />
      <NavbarBreadCrumb />
      <div className="container my-5">
        <CategoryCard />
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6"><MyLine /></div>
          <div className="col-12 col-lg-6"><MyPie /></div>
        </div>
      </div>

      <div className="container-sm mt-5">
         <h1 className="text-center">
           <code>useScroll demo</code>
         </h1>
         <LoremIpsum />
       </div>
       <Footer />
    </div>
  );
};

const NotFoundPage = () => {
  return <div>
    <NotFound />
  </div>;
};

const App = () => {

  const MainProduct = () => {
    const { scrollYProgress } = useScroll();
    return (
      <div>
        <div className="container-sm">
          <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>
        </div>
        <Navbar />
          <Product />
        <Footer />
      </div>
    );
  };

  const MainProfile = () => {
    const { scrollYProgress } = useScroll();
    return (
      <div>
        <div className="container-sm">
          <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>
        </div>
        <Navbar />
          <Profile />
        <Footer />
      </div>
    );
  };

  const LoginWithHiddenNavbar = () => {
    return (
      <div>
        {/* <Navbar />'ı burada koşullu olarak göstermeyebilirsiniz */}
        <Login />
      </div>
    );
  };

  return (
    <div>
      

      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="Product" element={<MainProduct />} />
          <Route exact path="Profile" element={<MainProfile />} />
          <Route exact path="Login" element={<LoginWithHiddenNavbar />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
