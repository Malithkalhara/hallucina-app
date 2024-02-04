import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Loading from "./pages/loading/Loading";
import { ScrolToTop } from "./components/ScrolToTop";
import { Header } from "./layout/Header";
import { Menu } from "./pages/menu/Menu";
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/css/font-awesome.css";
import "./assets/css/jquery.smartmenus.bootstrap.css"
import "./assets/css/jquery.simpleLens.css"
import "./assets/css/slick.css"
import "./assets/css/nouislider.css"
import "./assets/css/theme-color/default-theme.css"
import "./assets/css/sequence-theme.modern-slide-in.css"
import "./assets/css/style.css"
import "./assets/css/theme-color/default-theme.css"
import { Slider } from "./pages/slider/Slider";
import { Promo } from "./pages/promo/Promo";
import { Banner } from "./pages/banner/Banner";
import { Popular } from "./pages/popular/Popular";
import { Support } from "./pages/support/Support";
import { Testimonial } from "./pages/testimonial/Testimonial";
import { Blog } from "./pages/blog/Blog";
import { ClientBrand } from "./pages/client-brand/ClientBrand";
import { Subscribe } from "./pages/subscribe/Subscribe";
import { Footer } from "./layout/Footer";
import { Login } from "./pages/login/Login";


const jsScripts = [
  "./assets/js/bootstrap.js",
  "./assets/js/custom.js",
  "./assets/js/jquery.simpleGallery.js",
  "./assets/js/jquery.smartmenus.bootstrap.js",
  "./assets/js/smartmenus.js",
  "./assets/js/nouislider.js",
  "./assets/js/sequence-theme.modern-slide-in.js",
  "./assets/js/sequence.js",
  "./assets/js/slick.js",
];

function App() {
  // useEffect(() => {
  //   jsScripts.map((url) => {
  //     const script = document.createElement("script");
  //     script.src = url;
  //     script.async = true;
  //     document.body.appendChild(script);
  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   });
  // }, []);

  return (
    <div className="App">
      {/* <Loading/> */}
      {/* <ScrolToTop /> */}
      <Header/>
      {/* <Menu/> */}
      {/* <Slider/> */}
      <Promo/>
      {/* <Banner/> */}
      <Popular/>
      <Support/>
      <Testimonial/>
      <Blog/>
      <ClientBrand/>
      <Subscribe/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
