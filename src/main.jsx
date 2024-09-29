import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "./components/layouts/NotFoundPage.jsx";
import AllTravels from "./components/pages/AllTravels.jsx";
import AyoMain from './components/pages/AyoMain.jsx';
import Agenda from './components/pages/Agenda.jsx';
import About from './components/pages/About.jsx';
import PreviousAgenda from './components/layouts/PreviousAgenda.jsx';
import NextAgenda from './components/layouts/NextAgenda.jsx';
import TodayAgenda from './components/layouts/TodayAgenda.jsx';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/travels",
    element: <AllTravels />,
  },
  {
    path: "/games",
    element: <AyoMain />,
  },
  {
    path: "/agenda",
    element: <Agenda />,
    children: [
      {
        path: "today-agenda",
        element: <TodayAgenda />,
      },
      {
        path: "previous-agenda",
        element: <PreviousAgenda />,
      },
      {
        path: "next-agenda",
        element: <NextAgenda />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
