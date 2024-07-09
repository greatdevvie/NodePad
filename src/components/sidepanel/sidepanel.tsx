import { Box, Divider, Group, Text, TextInput } from "@mantine/core";
import styles from './sidepanel.module.css'
import { useLayoutEffect, useState } from "react";
import moment from 'moment';

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
                <Text size="sm" component="span" truncate="end" style={{ opacity: 0.7 }}>{exText}</Text>
            </Group>
        </Box>
    )
}

const List = [
    {
        header: 'Heade4rhwefjwef4rwe',
        time: '01.02.2021 17:00',
        exText: 'FUweufweqhfwerqfergfqwefwqre',
        isChosen: false
    },
    {
        header: 'Hйцуейеайцуайцfjwef4rwe',
        time: '01.02.2021 17:00',
        exText: 'FUweufweqhfwerqfergfqwefwqre',
        isChosen: false
    },
]

export default function SidePanel() {
    const [searchVal, setSearchVal] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useLayoutEffect(() => {
        const myInterval = setInterval(() => {
            setCurrentTime(moment().format('MM.DD.YYYY HH:mm'))
        }, 1000)
        return () => {
            clearInterval(myInterval);
        }
    }, [setCurrentTime])

    return (
        <Box h={`100vh`}>
            <TextInput placeholder="Search" onInput={(e) => {
                setSearchVal(e.currentTarget.value)
            }} />
            <Divider />
            <Item key='new' header="Новая заметка" time={currentTime} exText="" isChosen={true} handleClick={() => {

            }}/>
            <Divider />
            {List.filter(el => el.header.toLowerCase().includes(searchVal)).map(el => {
                return (
                    <div key={el.header}>
                        <Item key={el.header} header={el.header} time={el.time} exText={el.exText} isChosen={el.isChosen} handleClick={() => {

                        }} />
                        <Divider />
                    </div>
                )
            })}
        </Box>
    )
}