import React from "react";

import Card from "react-bootstrap/Card";
import MailIcon from '@material-ui/icons/Mail';

import "./Subscriber.css";

const SubscriberInfo = ({subscriberInfo}) => {

    const { email } = subscriberInfo;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title style={{
                    textAlign: "center",
                    color: "#7d5a19"
                }}>{email}</Card.Title>
                <div style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center"
                }}>
                    <MailIcon className="mail" varient="warning" justIcon onClick={() => {
                        window.open('mailto:${email}')
                    }}/>
                </div>
            </Card.Body>
        </Card>
    )
}

export default SubscriberInfo;