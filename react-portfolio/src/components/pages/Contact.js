import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
    <div>
    <Form>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}
