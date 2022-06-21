import React from 'react';
import { Button, CloseButton, Modal } from 'react-bootstrap';


export const FormularioModal = ({show, handleClose, titulo, className, children}) => {  

    return(
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}  dialogClassName={className}
                aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title className='h5'>{titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}                   
                </Modal.Body>
            </Modal>
        </>
    )
}