import PageNotFound from "./Components/PageNotFound";
import {
  HomePage,
  PersonalInfo,
  Summary,
  ThankYou,
  YourPlans,
} from "./Pages/Collect";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ActivePageProvider } from "./Context/ActivePage";
import AddOns from "./Pages/AddOns";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <PersonalInfo /> },
      {
        path: "Personalinfo",
        element: <PersonalInfo />,
      },
      {
        path: "Summary",
        element: <Summary />,
      },
      {
        path: "Yourplans",
        element: <YourPlans />,
      },
      {
        path: "AddOns",
        element: <AddOns />,
      },
      {
        path: "ThankYou",
        element: <ThankYou />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <ActivePageProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </ActivePageProvider>
    </div>
  );
}

export default App;
