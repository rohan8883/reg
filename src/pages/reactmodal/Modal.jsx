import React from 'react'
import { useState } from 'react';
import Modal1 from 'react-modal'

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50% ,-50%)",
    }
}

const Modal = () => {
    const [modelIsopen, setIsopen] = useState(false);

    const openModal = () => {
        setIsopen(true);
    }
    const closeModal = () => {
        setIsopen(false);
    }
    const afterOpenModal = () => { };
    const modalAction = () => {
        openModal();
    }
  return (

    
    <div>
       <Modal1
                isOpen={modelIsopen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
            >
  <form action="">
<label htmlFor="">first name </label>
<input type="text" /> <br />
<label htmlFor="">last name</label>
<input type="text" />


  </form>
            </Modal1>

            <button onClick={modalAction}>open modal</button>
    </div>
  )
}

export default Modal
