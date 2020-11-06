import React, {useState} from "react";
import "./glove.css";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "./dashComps/Button";

const CoolAnim = () => {

    let history = useHistory();
    const [whiteModal, setWhiteModal] = useState(false);
  
    const handleWhiteClose = () => setWhiteModal(false);
    const handleWhiteShow = () => setWhiteModal(true);

    return (
        <div className="centerBox">
        <Modal show={whiteModal} onHide={handleWhiteClose}>
        <Modal.Header closeButton>
          <Modal.Title>White Glove Service</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{width: "100%", margin: "0 auto", textAlign: "center"}}>We offer a unique white glove service for our top clientelle. This white glove service includes hand delivery of the product and transfer of your collectible to be made in-person. We offer private consultation with the service for our valued clients as well as professional recording of the event to share with your social media presence or simply keep for your own commemoration.</p></Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={handleWhiteClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <div className="categoryWrapperGlove">
            <h1 className="whiteglovetext">WhiteGlove</h1>
            <button>
                <span>
                    <span>
                        <span data-attr-span="Learn More" onClick={() => {
                            setWhiteModal(true)
                        }}>
                            View
                        </span>
                    </span>
                </span>
            </button>
        </div>
        
    </div>
    )
}

export default CoolAnim;