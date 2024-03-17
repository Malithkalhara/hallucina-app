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
import { useEffect } from "react";
import { ApiClient } from "./utils/ApiClient";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/reducers/authSlice";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { useIdleTimer } from "react-idle-timer";
import { refreshToken } from "./utils/tokenUtil";
import toast from "react-hot-toast";

const App = () => {
  const [role, setRole] = useState("admin");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState("Active");
  const [count, setCount] = useState(0);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timeout = 30 * 60 * 1000; // in milliseconds
  const refreshTimeout = 20 * 60; // in seconds

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      ApiClient.post("/user/verify", {
        token,
      })
        .then((response) => {
          console.log(response.data);
          const decodedToken = jwtDecode(token);
          dispatch(
            login({
              ...decodedToken,
              accessToken: token,
              refreshToken: localStorage.getItem("refreshToken"),
            })
          );
        })
        .catch((error) => {
          console.log(error);
          dispatch(logout());
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
        });
    }
  }, []);

  // Idle, Active, and Action event handlers
  const onIdle = () => {
    setState("Idle");
    dispatch(logout());
    localStorage.removeItem("token");
    if (isLogged) {
      toast.error(
        (t) => (
          <div className="mx-2 d-flex">
            <span>You are now logged out due to inactivity</span>
            <button
              className="btn btn-sm btn-primary ms-2"
              onClick={async () => {
                try {
                  console.log("Refreshing token when idle")
                  await refreshToken();
                  const decodedToken = jwtDecode(localStorage.getItem("token"));
                  dispatch(
                    login({
                      ...decodedToken,
                      accessToken: localStorage.getItem("token"),
                      refreshToken: localStorage.getItem("refreshToken"),
                    })
                  );
                  toast.dismiss(t.id);
                } catch (error) {
                  toast.error(`Error refreshing token: ${error.message}`);
                }
              }}
            >
              Login
            </button>
            <button
              className="btn btn-sm btn-secondary ms-2"
              onClick={() => {
                dispatch(logout());
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                toast.dismiss(t.id);
              }}
            >
              Logout
            </button>
          </div>
        ),
        {
          duration: Infinity,
        }
      );
    }
  };

  const onActive = () => {
    setState("Active");
  };

  const onAction = () => {
    console.log(count)
    setCount(count + 1);
  };

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: timeout,
    throttle: 500,
  });

  useEffect(() => {
    if (isLogged) {
      setStartTime(new Date());
    }
  }, [isLogged]);

  useEffect(() => {
    if (isLogged) {
      console.log(isLogged)
      const interval = setInterval(() => {
        const currentTime = new Date();
        const elapsedMilliseconds = currentTime - startTime;
        console.log(Math.floor(elapsedMilliseconds / 1000));
        setElapsedTime(Math.floor(elapsedMilliseconds / 1000));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [startTime, isLogged]);

  useEffect(() => {
    console.log(elapsedTime, refreshTimeout, state, isLogged);
    if (elapsedTime > refreshTimeout && state === "Active" && isLogged) {
      console.log("refreshing token");
      setStartTime(new Date());
      refreshToken();
    }
  }, [elapsedTime]);

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
