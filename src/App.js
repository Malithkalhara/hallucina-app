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
import "./assets/css/style.css";
import "./assets/css/theme-color/default-theme.css";
import { Body } from "./layout/Body";
import { Footer } from "./layout/Footer";

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
      <div className="d-flex flex-column">
        <Header />
        <Menu />
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
