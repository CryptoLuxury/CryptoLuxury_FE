import React from "react";
import "./testCard.css";
import { useHistory } from "react-router-dom";

const CoolAnim = () => {

    let history = useHistory();

    return (
        <div className="centerBox">
	
        <div className="categoryWrapperCard">
            <h1>Cards</h1>
            <button>
                <span>
                    <span>
                        <span data-attr-span="View Collection" onClick={() => {
                            history.push('/cards')
                        }}>
                            Browse
                        </span>
                    </span>
                </span>
            </button>
        </div>
        
    </div>
    )
}

export default CoolAnim;