import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Login.css'; // Import the custom CSS file

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Redirecting to dashboard...',
        }).then(() => {
            navigate('/dashboard');
        });
    };

    return (
        <div className="login-container">
            <Card className="login-card">
                <Card.Body>
                    <h2 className="text-center">Login</h2>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <br />
                        <Button variant="success" type="submit" className="d-block mx-auto">
                            Login
                        </Button>
                    </Form>
                    <div className="mt-3 text-center">
                        Don't have an account? <Link to="/signup">Sign up here</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;
