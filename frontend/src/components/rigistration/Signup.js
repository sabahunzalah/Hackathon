import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './SignUp.css'; // Import the custom CSS file

function SignUp() {
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Successfully Registered',
            text: 'You can now log in.',
        }).then(() => {
            navigate('/login');
        });
    };

    return (
        <div className="signup-container">
            <Card className="signup-card">
                <Card.Body>
                    <h2 className="text-center">Sign Up</h2>
                    <Form onSubmit={handleSignUp}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" required />
                        </Form.Group>

                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" required />
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" required />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" required />
                        </Form.Group>
                        <br />
                        <Button variant="success" type="submit" className="d-block mx-auto">
                            Sign Up
                        </Button>
                    </Form>
                    <div className="mt-3 text-center">
                        Already have an account? <Link to="/login">Login here</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SignUp;
