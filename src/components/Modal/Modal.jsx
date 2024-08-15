import React, { useState } from "react";
import "../CSS/Modal.css";

export default function Modal({closeDialog, dialogMessage}) {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {/* <button onClick={closeDialog} className="btn-modal">
        Open
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={closeDialog} className="overlay"></div>
          <div className="modal-content">
            <p>
              { dialogMessage }
            </p>
            <button className="close-modal" onClick={closeDialog}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}