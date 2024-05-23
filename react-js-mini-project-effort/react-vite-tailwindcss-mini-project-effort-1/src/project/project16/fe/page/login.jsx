import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Form,Button} from "react-bootstrap";

export default function Login() {

  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    nav("/")
  }

  return (
    <div>
      <div className="Login">
          <Form onSubmit={handleSubmit}>
              <Form.Group size="lg" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required autoFocus type="email" value={email} onChange={(e)=> setEmail(e.target.value)}
                      />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="password" value={password} onChange={(e)=> setPassword(e.target.value)}
                      />
              </Form.Group>
              <Button block size="lg" type="submit" disabled={!validateForm()}>
                  Login
              </Button>
          </Form>
      </div>
    </div>
  )
}
