import React from "react";

import Card from "react-bootstrap/Card";
import Button from "../../components/CustomButtons/Button";

const ContactTicket = ({ticketInfo}) => {

    const { name, email, message } = ticketInfo;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{ticketInfo.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{ticketInfo.email}</Card.Subtitle>
                <Card.Text>
                    {ticketInfo.message}
                </Card.Text>
                <Button color="danger">Delete</Button>
            </Card.Body>
            </Card>
    )
}

export default ContactTicket;