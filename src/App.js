import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import SearchResults from "./Pages/SearchResults";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Details/:id",
    element: <DetailsPage />,
  },
  {
    path: "/Results/:id",
    element: <SearchResults />,
  },
]);

function App() {
  return (
    <div className="dark:bg-gray-800 dark:text-slate-50">
      <Navbar />
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
