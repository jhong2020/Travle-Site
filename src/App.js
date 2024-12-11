import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  Outlet,
} from 'react-router-dom';

import Main from "./main/Main";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PostList from "./board/PostList";
import PostCreate from "./board/PostCreate";
import SummerPosting from "./season/SummerPosting";
import SpringPosting from "./season/SpringPosting";
import TourismPosting from "./theme/TourismPosting";
import FallPosting from "./season/FallPosting";
import WinterPosting from "./season/WinterPosting";
import EpicurismPosting from "./theme/EpicurismPosting";
import RecreationPosting from "./theme/RecreationPosting";
import ActivityPosting from "./theme/ActivityPosting";
import LoginPage from "./main/LoginPage";
import SignUpPage from "./main/SignUpPage";
import Country from "./Country";
import Season from "./Season";
import Theme from "./Theme";
import CountryInfo from "./country/CountryInfo";
import Board from "./Board";
import LogoutNavbar from "./components/LogoutNavbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const Layoutout = () => {
  return (
    <>
      <LogoutNavbar />
      <Outlet />
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/post",
        element: <Board />
      },
      {
        path: "/postcreate",
        element: <PostCreate />
      },
      {
        path: "/summer",
        element: <SummerPosting />
      },
      {
        path: "/spring",
        element: <SpringPosting />
      },
      {
        path: "/tourism",
        element: <TourismPosting />
      },
      {
        path: "/fall",
        element: <FallPosting />
      },
      {
        path: "/winter",
        element: <WinterPosting />
      },
      {
        path: "/epicurism",
        element: <EpicurismPosting />
      },
      {
        path: "/recreation",
        element: <RecreationPosting />
      },
      {
        path: "/activity",
        element: <ActivityPosting />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/signup",
        element: <SignUpPage />
      },
      {
        path: "/country",
        element: <Country />
      },
      {
        path: "/season",
        element: <Season />
      },
      {
        path: "/theme",
        element: <Theme />
      },
      {
        path: "/country-info/:countryId",
        element: <CountryInfo />
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
