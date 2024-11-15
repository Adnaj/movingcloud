import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function modal() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
        handleClose();
      };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Contact Form</DialogTitle>
        <DialogContent>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formComments">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter any comments" />
              </Form.Group>
            </Row>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default modal
