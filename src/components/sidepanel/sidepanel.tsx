import { Box, Divider, Group, Text, TextInput } from "@mantine/core";
import styles from './sidepanel.module.css'
import { useLayoutEffect, useState } from "react";
import moment from 'moment';
import { db } from "../../data/db";
import { useLiveQuery } from "dexie-react-hooks";

interface ItemType {
    header: string,
    time: string,
    exText: string,
    isChosen: boolean,
    handleClick: () => void,
}

function Item({ header, time, exText, isChosen, handleClick }: ItemType) {
   return (
        <Box className={isChosen ? `` : styles.menuItem} py={14} px={28} onClick={handleClick} bg={isChosen ? `rgba(192, 192, 192, 0.1)` : ``} style={{ cursor: 'pointer' }}>
            <Text truncate="end" size="md" style={{fontWeight: 'bold'}}>
                {header}
            </Text>
            <Group style={{ display: 'flex', whiteSpace: 'nowrap', flexWrap: 'nowrap' }}>
                <Text size="sm" component="span" style={{fontWeight: '600'}}>{time}</Text>
                <Text size="sm" component="span" truncate="end" style={{ opacity: 0.7 }} dangerouslySetInnerHTML={{ __html: exText }} />
            </Group>
        </Box>
    )
}

export default function SidePanel() {
    const [searchVal, setSearchVal] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const notes = useLiveQuery(() => db.notes.toArray());

    useLayoutEffect(() => {
        const myInterval = setInterval(() => {
            setCurrentTime(moment().format('MM.DD.YYYY HH:mm'))
        }, 1000)
        return () => {
            clearInterval(myInterval);
        }
    }, [setCurrentTime])

    async function addNote() {
        const header = 'value.header';
        const body = 'value.body';
        const time = moment().format('MM.DD.YYYY HH:mm')
        try {
            await db.notes.add({
                time,
                header,
                body
            });
        } catch (error) {
            console.log(error)
        }
    }  

    return (
        <Box h={`100vh`}>
            <TextInput placeholder="Search" onInput={(e) => {
                setSearchVal(e.currentTarget.value)
            }} />
            <Divider />
            <Item key='new' header="Новая заметка" time={currentTime} exText="No additional text" isChosen={false} handleClick={addNote}/>
            <Divider />
            {notes?.filter(el => el.header.toLowerCase().includes(searchVal)).map(el => {
                return (
                    <div key={el.id}>
                        <Item header={el.header} time={el.time} exText={el.body} isChosen={false} handleClick={() => {

                        }} />
                        <Divider />
                    </div>
                )
            })}
        </Box>
    )
}