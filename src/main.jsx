import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Team from "./pages/team/Team";
import Contacts from "./pages/contact/Contacts";
import Invoices from "./pages/invoices/Invoices";
import Form from "./pages/form/Form";
import Calender from "./pages/calender/Calender";
import Faq from "./pages/faq/Faq";
import Barchart from "./pages/barChart/Barchart";
import LineChart from "./pages/lineChat/LineChart";
import Piechart from "./pages/pieChat'/Piechart";
import NotFound from "./pages/notFound/NotFound";
import Geography from "./pages/geography/Geography";
import Dashboard from "./pages/dasboard/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calender />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Barchart />} />
      <Route path="pie" element={<Piechart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
