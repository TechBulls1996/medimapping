import { Outlet } from "react-router-dom";
import Header from "../components/header";
import ErrorPage from "../pages/error-page";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Footer from "../components/footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Loader from "../components/common/loader";
import Dashboard from "../pages/user/Dasboard";
import Community from "../pages/user/Community";
import RequestDetails from "../pages/RequestDetails";
import Network from "../pages/user/Network";
import Doctors from "../pages/user/Doctors";
import Records from "../pages/user/Records";
import Vitals from "../pages/user/Vitals";
import History from "../pages/user/History";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
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
