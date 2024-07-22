import { Box, Divider, TextInput } from "@mantine/core";
import { useLayoutEffect, useState } from "react";
import moment from 'moment';
import { db } from "../../data/db";
import { useLiveQuery } from "dexie-react-hooks";
import { useContent } from "../../hooks/useContent";
import SideItem from "./sideitem/SideItem";


export default function SidePanel() {
    const { context, setContext } = useContent();
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
        try {
            setContext({
                id: 0,
                isDisabled: false,
                header: '',
                body: '<p></p>'
            })
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
            <SideItem key='new' header='Новая заметка' time={currentTime} exText='No additional text' isChosen={context.id === 0 ? true : false} handleClick={addNote}/>
            <Divider />
            {notes?.filter(el => el.header.toLowerCase().includes(searchVal)).map(el => {
                const body = el.body.toString().split('&nbsp;').join(' ').split(/<[^>]*>/g).join(''); /* Багфикс: отображаться всё будет в нативном формате без искосов в размере и без изменений в шрифтовке. */
                return (
                    <div key={el.id}>
                        <SideItem header={el.header} time={el.time} exText={body} isChosen={context.id === el.id ? true : false} handleClick={() => {
                            setContext({
                                id: el.id,
                                isDisabled: false,
                                header: el.header,
                                body: el.body
                            })
                        }} />
                        <Divider />
                    </div>
                )
            })}
        </Box>
    )
}