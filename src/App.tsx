import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root";

export default function App() {
  const router = createBrowserRouter(
    [{ path: "*", Component: Root }] // The routing scheme (array of objects)
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
