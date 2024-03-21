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
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useIdleTimer } from "react-idle-timer";
import { useDispatch, useSelector } from "react-redux";
import "./assets/css/style.css";
import "./assets/css/theme-color/default-theme.css";
import { Body } from "./layout/Body";
import { Footer } from "./layout/Footer";
import { getUser, login, logout } from "./redux/reducers/authSlice";
import { getIsHome } from "./redux/reducers/homeViewSlice";
import { ApiClient } from "./utils/ApiClient";
import { refreshToken } from "./utils/tokenUtil";

const App = () => {
  const [role, setRole] = useState("admin");
  const userData = useSelector(getUser);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState("Active");
  const [count, setCount] = useState(0);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timeout = 30 * 60 * 1000; // in milliseconds
  const refreshTimeout = 20 * 60; // in seconds
  const homeState = useSelector(getIsHome);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      ApiClient.post("/user/verify", {
        token,
      })
        .then((response) => {
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
              }}>
              Login
            </button>
            <button
              className="btn btn-sm btn-secondary ms-2"
              onClick={() => {
                dispatch(logout());
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                toast.dismiss(t.id);
              }}>
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
      const interval = setInterval(() => {
        const currentTime = new Date();
        const elapsedMilliseconds = currentTime - startTime;
        setElapsedTime(Math.floor(elapsedMilliseconds / 1000));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [startTime, isLogged]);

  useEffect(() => {
    if (elapsedTime > refreshTimeout && state === "Active" && isLogged) {
      setStartTime(new Date());
      refreshToken();
    }
  }, [elapsedTime]);

  return (
    <div className="App">
      <div className="d-flex flex-column">
        <Header />
        {userData?.role === "admin" && !homeState?.homeView ? null : <Menu />}
      </div>

      <Body />
      <Footer />
    </div>
  );
};

export default App;
