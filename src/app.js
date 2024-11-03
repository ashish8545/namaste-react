import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/montserrat";
import "@fontsource/montserrat/100.css";
import Header from "./components/Header";
// import Body from "./components/Body";
// import About from "./components/About";

// import Contact from "./components/Contact";
import Error from "./components/error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import RestaurantMenu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import Shimmer from "./components/Shimmer";

const Body = lazy(() => import("./components/Body"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const Cart = lazy(() => import("./components/Cart"));
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();

  // authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName("Ashish Shinde");
  }, []);

  return (
    <div className="app">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          {!onlineStatus ? (
            <h3>
              Looks like you're offline!! Please check your internet connection.
            </h3>
          ) : (
            <Outlet />
          )}
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
