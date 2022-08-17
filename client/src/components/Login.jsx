import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom';
import { signIn } from '../redux/actions';
import './Auth.css'

const Register = () => {
    const {users, loading} = useSelector((state) => state)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
      e.preventDefault()
      const user = {
        email,
        password
      }
      dispatch(signIn(user))
    }
  return (
    <div className='loginBG'>
  <div>
    {
        loading? <h2>Loading...</h2> :
        localStorage.getItem("token")?
        <Navigate to = "/profile" />
        :
  <Form className='loginF' onSubmit={handleSubmit}>
    <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
    <br/>
    <Button variant="primary" type="submit">
      Log In
    </Button>
    <br/>
    or
    <br/>
    <Link to="/" variant="link" role="button">Sign Up</Link>
  </Form>
}
  </div>
  </div>
  )
}

export default Register