import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Alert, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../firebase/firebase';
import { Link } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const auth = getAuth();

    const registerWithEmailAndPassword = async () => {
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log("user",userCredential);
                const user = userCredential.user;
                localStorage.setItem("accessToken",user.accessToken)
                window.location.assign("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });
        setLoading(false)

    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    {
                        loading ?
                            <Button variant="primary" disabled >
                                <Spinner animation="border" size="sm" variant="light" /> Please wait...
                            </Button> :
                            <Button variant="primary" onClick={registerWithEmailAndPassword} >
                                Register
                            </Button>
                    }
                </Row>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Link to="/login">  
                        <Button variant="dark" className="mt-4  w-100"  >
                            Login here
                        </Button>
                        </Link>
                         </Form.Group>
                <Row className='mt-4'>
                    {
                        error && (
                            <Alert variant='danger'>
                                ERROR : {error}
                            </Alert>
                        )
                    }
                </Row>
            </Container>
        </>
    )
}

