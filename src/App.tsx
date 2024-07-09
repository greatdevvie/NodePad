import '@mantine/core/styles.css';
import { Divider, Grid, MantineProvider } from '@mantine/core';
import SidePanel from './components/sidepanel/sidepanel';
import TextEditor from './components/editor/editor';
import './style.css';

export default function App() {

  return (
    <MantineProvider>
      <Grid gutter={{ base: 0 }}>
        <Grid.Col span={2}>
          <SidePanel />
        </Grid.Col>
        <Divider orientation='vertical' />
        <Grid.Col span={`auto`}>
          <TextEditor date='lol' />
        </Grid.Col> 
      </Grid>
    </MantineProvider>
  )
}
