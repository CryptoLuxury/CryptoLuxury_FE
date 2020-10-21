import React from "react";

import Card from "react-bootstrap/Card";
import MailIcon from '@material-ui/icons/Mail';

const SubscriberInfo = ({subscriberInfo}) => {

    const { email } = subscriberInfo;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{email}</Card.Title>
                <div style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center"
                }}>
                    <MailIcon color="warning" justIcon onClick={() => {
                        window.open('mailto:${email}')
                    }}/>
                </div>
            </Card.Body>
        </Card>
    )
}

export default SubscriberInfo;