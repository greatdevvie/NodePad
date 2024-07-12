import '@mantine/core/styles.css';
import './style.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ContentProvider } from './context/ContentProvider.tsx';
import Authorization from './pages/auth.tsx';
import NotePadSys from './pages/notepad.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authorization />,
  },
  {
    path: "notepad",
    element: <NotePadSys />,
  },
]);

export default function App() {
  return (
    <MantineProvider>
      <ContentProvider>
        <Notifications />
        <RouterProvider router={router} />
      </ContentProvider>
    </MantineProvider>
  )
}
