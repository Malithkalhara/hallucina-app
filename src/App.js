import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "./assets/css/font-awesome.css";
import "./assets/css/jquery.simpleLens.css";
import "./assets/css/jquery.smartmenus.bootstrap.css";
import "./assets/css/nouislider.css";
import "./assets/css/slick.css";
import "./assets/css/theme-color/default-theme.css";
import { Header } from "./layout/Header";
import { Menu } from "./pages/menu/Menu";
// import "./assets/css/sequence-theme.modern-slide-in.css";
import { useState } from "react";
import "./assets/css/style.css";
import "./assets/css/theme-color/default-theme.css";
import { Body } from "./layout/Body";
import { Footer } from "./layout/Footer";

const App = () => {
  const [role, setRole] = useState("admin");

  return (
    <div className="App">
      {/* {role !== "admin" ? ( */}
      <div className="d-flex flex-column">
        <Header />
        <Menu />
      </div>
      {/* ) : null} */}

      <Body />
      <Footer />
    </div>
  );
};

export default App;
