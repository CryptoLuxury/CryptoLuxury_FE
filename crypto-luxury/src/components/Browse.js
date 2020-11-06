import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {Row, Col} from "react-bootstrap";

import "./Browse.css";

const Browse = () => {

    let history = useHistory();

    return (
        <Row className="allcards">
        
            <Col className="browseOne">
            <div className="boxbrowse" onClick={() => {
                history.push('/watches')
            }}>
                <h6 className="firstb">Browse</h6>
                <h2 className="secondb">Watch</h2>
                <h6 className="firstb">Collection</h6>
            </div>
            </Col>
            <Col className="browseOne">
            <div className="boxbrowse" onClick={() => {
                history.push('/watches')
            }}>
                <h6 className="firstb">Browse</h6>
                <h2 className="secondb">Entire</h2>
                <h6 className="firstb">Collection</h6>
            </div>
            </Col>
            <Col className="browseOne">
            <div className="boxbrowse" onClick={() => {
                history.push('/cards')
            }}>
                <h6 className="firstb">Browse</h6>
                <h2 className="secondb">Card</h2>
                <h6 className="firstb">Collection</h6>
            </div>
            </Col>
        
        </Row>
    )
}

export default Browse;