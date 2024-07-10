import '@mantine/core/styles.css';
import './style.css';
import Authorization from './auth.tsx'
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import NotePadSys from './notepad.tsx';

export default function App() {

  return (
    <MantineProvider>
      <Notifications />
      <NotePadSys />
    </MantineProvider>
  )
}
