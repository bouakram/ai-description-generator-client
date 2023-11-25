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
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from './constants';

///// ! when redirect to the path = '/' the page is not rerender after registration or logging in.
function App() {
  const token = useStore(store => store.token)
  const setToken = useStore(store => store.setToken)
  useQuery({
    queryKey: ['verifyUser'],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}auth/verify-user`, { withCredentials: true })
      if (response.data.token) {
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
      }
    },
    retry: false
  })

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
