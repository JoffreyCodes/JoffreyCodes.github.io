import React from 'react';
import { useState } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';

function ImgModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card.Img variant="top" src={props.src} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose} animation={false} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{props.displayTitle}</Modal.Title>
        </Modal.Header>
        <Card.Img class="modal-project-img" variant="top" src={props.src} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImgModal