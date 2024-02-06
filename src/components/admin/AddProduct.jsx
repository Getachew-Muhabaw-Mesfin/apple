import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddProduct() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    product_url: "",
    product_name: "",
    // Add other form fields here
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/addNewProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful response, e.g., close the modal
      handleClose();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

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
          <Modal.Title id="a-modal-sizes-title-lg">Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="product_url">
                  <Form.Label>Product URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product URL"
                    name="product_url"
                    value={formData.product_url}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="product_name">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="product_name"
                    value={formData.product_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="starting_price">
                  <Form.Label>Starting Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="starting_price"
                    value={formData.product_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="price_range">
                  <Form.Label>Price Range</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="price_range"
                    value={formData.product_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group controlId="brief_description">
                  <Form.Label>Brif Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="brief_description"
                    value={formData.product_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="full_description">
                  <Form.Label>Full Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="full_description"
                    value={formData.product_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="product_img">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="product_img"
                    value={formData.product_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="product_link">
                  <Form.Label>Product Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="product_link"
                    value={formData.product_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </div>
              <div className="col-md-6">
                <Button variant="primary" type="submit">
                  Add Product
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddProduct;
