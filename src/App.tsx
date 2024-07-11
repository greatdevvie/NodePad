import '@mantine/core/styles.css';
import './style.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import NotePadSys from './pages/notepad.tsx';
import { ContentProvider } from './context/ContentProvider.tsx';
import Authorization from './pages/auth.tsx';

export default function App() {

  return (
    <MantineProvider>
      <ContentProvider>
        <Notifications />
        <Authorization />
      </ContentProvider>
    </MantineProvider>
  )
}
