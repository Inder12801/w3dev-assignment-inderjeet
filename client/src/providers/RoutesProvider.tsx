import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Auth from "../components/Auth/Auth";

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path="/home" element={<div>Home</div>} />
    <Route path="/auth" element={<Auth />} />
  </Route>
);

const router = createBrowserRouter(routes);

const RoutesProvider = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default RoutesProvider;
