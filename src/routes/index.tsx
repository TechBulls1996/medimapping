import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ErrorPage from "../pages/error-page";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Loader from "../components/common/Loader";
import Dashboard from "../pages/user/Dasboard";
import Community from "../pages/user/Community";
import RequestDetails from "../pages/RequestDetails";
import Network from "../pages/user/Network";
import Doctors from "../pages/user/Doctors";
import Records from "../pages/user/Records";
import Vitals from "../pages/user/Vitals";
import History from "../pages/user/History";
import Blogs from "../pages/Blogs";
import Logout from "../pages/Logout";
import ForgotPassword from "../pages/ForgotPassword";

function MainLayout() {
  return (
    <>
      <Loader />
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/logout",
        element: <Logout />,
      },
      {
        path: "/auth/forgot",
        element: <ForgotPassword />,
      },
      {
        path: "/request/:requestId",
        element: <RequestDetails />,
      },
    ],
  },

  {
    path: "/user",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Community />,
        index: true,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        index: true,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "network",
        element: <Network />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "records",
        element: <Records />,
      },
      {
        path: "vitals",
        element: <Vitals />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
];

export default ROUTES;
