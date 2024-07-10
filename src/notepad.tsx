import { Divider, Grid } from '@mantine/core';
import SidePanel from './components/sidepanel/sidepanel';
import TextEditor from './components/editor/editor';

export default function NotePadSys() {
    return (
        <Grid gutter={{ base: 0 }}>
            <Grid.Col span={2}>
            <SidePanel />
            </Grid.Col>
            <Divider orientation='vertical' />
            <Grid.Col span={`auto`}>
            <TextEditor />
            </Grid.Col> 
        </Grid>
    )
}