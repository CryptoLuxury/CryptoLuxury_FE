import React from "react";

import Card from "react-bootstrap/Card";

const ContactTicket = ({ticketInfo}) => {

    const { name, message } = ticketInfo;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{ticketInfo.name}</Card.Title>
                <Card.Text>
                    {ticketInfo.message}
                </Card.Text>
            </Card.Body>
            </Card>
    )
}

export default ContactTicket;