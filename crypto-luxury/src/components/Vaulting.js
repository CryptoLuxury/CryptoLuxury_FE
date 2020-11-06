import React, {useState} from "react";
import "./vault.css";
import { useHistory } from "react-router-dom";
import Button from "./dashComps/Button";
import Modal from "react-bootstrap/Modal";

const CoolAnim = () => {

    let history = useHistory();
    const [show, setShow] = useState(false);

    const [vaultingModal, setVaultingModal] = useState(false);
  
    const handleVaultingClose = () => setVaultingModal(false);
    const handleVaultingShow = () => setVaultingModal(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="centerBox">
        <Modal show={vaultingModal} onHide={handleVaultingClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vaulting</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{width: "100%", margin: "0 auto", textAlign: "center"}}>We offer full vaulting services for all luxury collectible goods. This vaulting service is partnered with Chase Bank, and all goods are insured for your safe keeping. All vaults are equiped with humidity control, fire protection, and sealed against theft around the clock.</p></Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={handleVaultingClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <div className="categoryWrapperVault">
            <h1>Vaulting</h1>
            <button>
                <span>
                    <span>
                        <span data-attr-span="Learn More" onClick={() => {
                            setVaultingModal(true)
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