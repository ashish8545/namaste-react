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

const Body = lazy(() => import("./components/Body"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();

  // authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName("Ashish Shinde");
  }, []);

  return (
    <div className="app">
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
          <Suspense fallback={"loading...."}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={"loading...."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={"loading...."}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={"loading...."}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
