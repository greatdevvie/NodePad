import '@mantine/core/styles.css';
import './style.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import NotePadSys from './notepad.tsx';
import { ContentProvider } from './context/ContentProvider.tsx';

export default function App() {

  return (
    <MantineProvider>
      <ContentProvider>
        <Notifications />
        <NotePadSys />
      </ContentProvider>
    </MantineProvider>
  )
}
