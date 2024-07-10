import { Button, Flex, TextInput, PasswordInput, Title, Accordion, Divider } from "@mantine/core";
import '@mantine/core/styles.css';
import { useState } from "react";
import { notifications } from '@mantine/notifications';

export default function Authorization() {
    const [value, setValue] = useState({
        username: '',
        password: '',
    })

    function isValid(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if ((value.username === 'Admin') && (value.password === 'admin')) {
            notifications.show({
                id: 'hello-there',
                autoClose: 3000,
                title: "Уааля",
                message: 'Ты вошел в систему, дон!',
                color: 'green',
                loading: false,
            });
        } else {
            notifications.show({
                id: 'hello-there',
                autoClose: 5000,
                title: "Упс",
                message: 'Неверный логин или пароль, дон. Перепечатай там, дон.',
                color: 'red',
                loading: false,
            });
        }
    }

    return (
        <Flex direction={`column`} w={`100vw`} h={`100vh`} justify={`center`} align={`center`}>
            <Title order={2} ta={`center`} mb={`lg`}>Окно входа</Title>
            <Flex direction={`column`} gap="lg">
                <TextInput size="lg" withAsterisk label="Юзернейм" placeholder="username" radius="md" onInput={(e) => {
                    setValue({
                        ...value,
                        username: e.currentTarget.value
                    })
                }} />
                <PasswordInput size="lg" withAsterisk label="Пароль" placeholder="password" radius="md" onInput={(e) => {
                    setValue({
                        ...value,
                        password: e.currentTarget.value
                    })
                }} />
            </Flex>
            <Flex justify={`center`} align={`center`}>
                <Button size={`xl`} mt={`xl`} onClick={isValid} variant="default">Войти</Button>
            </Flex>
            <Divider my='xl' />
            <Accordion>
                <Accordion.Item value='userpass'>
                    <Accordion.Control>Какой же пароль и юзер?</Accordion.Control>
                    <Accordion.Panel><p>Юзернейм: <strong>Admin</strong><br />Пароль: <strong>admin</strong></p></Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Flex>
    )
}