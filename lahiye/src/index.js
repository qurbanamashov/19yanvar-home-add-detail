import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Add from './Pages/Add/Add';
import Detail from './Pages/Detail/Detail';
import Main from './Pages/Main/Main';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/detail/:id",
    element: <Detail/>,
  },
  {
    path: "/add",
    element: <Add/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


