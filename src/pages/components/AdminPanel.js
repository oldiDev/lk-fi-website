import React from 'react'
import { Button, Container } from 'react-bootstrap'

 const AdminPanel = () => {
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-4 p-2">Добавить Пост</Button>
            <Button variant={"outline-dark"} className="mt-4 p-2">Добавить Наградц</Button>
        </Container>
    );
};

export default AdminPanel