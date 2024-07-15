import { Box, Group, Text } from "@mantine/core";
import styles from './assets/sidepanel.module.css';


interface ItemType {
    header: string,
    time: string,
    exText: string,
    isChosen: boolean,
    handleClick: () => void,
}

export default function SideItem({ header, time, exText, isChosen, handleClick }: ItemType) {

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
