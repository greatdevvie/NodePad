import { Button, Flex, MantineProvider, TextInput, PasswordInput, Title } from "@mantine/core";
import '@mantine/core/styles.css';

export default function Authorization() {
    return (
        <MantineProvider>
            <Flex direction={`column`} w={`100vw`} h={`100vh`} justify={`center`} align={`center`}>
                <Title size={`xl`} ta={`center`}>Лог-ин окно</Title>
                <Flex direction={`column`}>
                    <TextInput label="Юзернейм" placeholder="username" radius="md" />
                    <PasswordInput label="Пароль" placeholder="password" radius="md" />
                </Flex>
                <Flex justify={`center`} align={`center`}>
                    <Button>Войти</Button>
                </Flex>
            </Flex>
        </MantineProvider>
    )
}