import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="a-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="a-modal-sizes-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
           {/* //input filds hear */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
        
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;
