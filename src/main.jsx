import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "./components/layouts/NotFoundPage.jsx";
import AllTravels from "./components/pages/AllTravels.jsx";
import AyoMain from './components/pages/AyoMain.jsx';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/travels",
    element: <AllTravels />,
  },
  {
    path: "/games",
    element: <AyoMain />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
