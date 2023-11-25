import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import "./styles/global.scss";
import { Navbar } from "./components/navbar/Navbar";
import { History } from "./components/history/History";
import { Footer } from "./components/footer/Footer";
import { Search } from "./components/search/Search";
import { Word } from "./pages/word/Word";
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="leftContainer">
            <History />
          </div>
          <div className="contentContainer">
            <Search />
            <Outlet />
          </div>
          <div className="rightContainer"></div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search/:word",
          element: <Word />,
        },
        // {
        //   path: "/users",
        //   element: <Users />,
        // },
        // {
        //   path: "/products",
        //   element: <Products />,
        // },
        // {
        //   path: "/users/:id",
        //   element: <User />,
        // },
        // {
        //   path: "/products/:id",
        //   element: <Product />,
        // },
        {
          path: "*",
          element: <div>404</div>,
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
