import Welcome from './pages/welcome/welcomePage';
import AuthPage from './pages/authentication/authPage';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/main/mainPage";
import Layout from "./components/Layout";
import { useStore } from './utils/store';

///// ! when redirect to the path = '/' the page is not rerender after registration or logging in.
function App() {
  const token = useStore(store => store.token)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: !token ? <Welcome /> : <Navigate to='/home' />,
        },
        {
          path: "/home",
          element: token ? <Main /> : <Navigate to='/' />,
        },
        {
          path: "/authentication",
          element: !token ? <AuthPage /> : <Navigate to='/' />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
