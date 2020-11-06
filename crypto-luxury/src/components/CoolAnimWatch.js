import React from "react";
import "./test.css";
import { useHistory } from "react-router-dom";

const CoolAnim = () => {

    let history = useHistory();

    return (
        <div className="centerBox">
	
        <div className="categoryWrapper">
            <h1>Watches</h1>
            <button>
                <span>
                    <span>
                        <span data-attr-span="View Collection" onClick={() => {
                            history.push('/watches')
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