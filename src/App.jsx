import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StackingPage from "./pages/StackingPage";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />{" "}
      </Layout>
    ),
  },
  {
    path: "/stacking",
    element: (
      <Layout>
        <StackingPage />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
