import { Button, Flex, TextInput, PasswordInput, Title, Accordion, Divider } from "@mantine/core";
import '@mantine/core/styles.css';
import { useState } from "react";
import { notifications } from '@mantine/notifications';
import { Form, useNavigate } from "react-router-dom";

export default function Authorization() {
    const [value, setValue] = useState<{ [key: string]: string }>({})
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const isValid = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (value.username === 'Admin' && value.password === 'admin') {
            navigate('/notepad')
        } else {
            notifications.show({
                id: 'oops',
                autoClose: 5000,
                title: "Упс",
                message: 'Неверный логин или пароль, дон. Перепечатай там, дон.',
                color: 'red',
                loading: false,
            });
        }
    }

    return (
        <Flex direction="column" w="100vw" h="100vh" justify="center" align="center">
            <Title order={2} ta="center" mb="lg">Окно входа</Title>
            <Flex direction="column" gap="lg">
                <Form
                    onChange={handleChange}
                >
                    <TextInput size="lg" withAsterisk label="Юзернейм" name="username" placeholder="username" radius="md" value={value.username || ''} />
                    <PasswordInput size="lg" withAsterisk label="Пароль" name="password" placeholder="password" radius="md" value={value.password || ''} />
                </Form>
            </Flex>
            <Flex justify="center" align="center">
                <Button size="xl" mt="xl" onClick={isValid} variant="default">Войти</Button>
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
