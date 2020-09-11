import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')
function Modals() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return(
        <div className="modal-main">
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <Modal 
                isOpen={modalIsOpen} 
                shouldCloseOnOverlayClick={false} 
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        content : {
                            top                   : '50%',
                            left                  : '50%',
                            right                 : 'auto',
                            bottom                : 'auto',
                            marginRight           : '-50%',
                            transform             : 'translate(-50%, -50%)'
                          }
                    }
                }
                
            >
                    <h2>Modal Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    );
}

export default Modals;