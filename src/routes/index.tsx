import { Outlet } from "react-router-dom";
import Header from "../components/header";
import ErrorPage from "../pages/error-page";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Footer from "../components/footer";
import Login from "../pages/Login";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const ROUTES = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default ROUTES;
