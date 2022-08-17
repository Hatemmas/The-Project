import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom';
import { registerUser } from '../redux/actions';
import './Auth.css'

const Register = () => {
    const {users, loading} = useSelector((state) => state)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
      e.preventDefault()
      const newUser = {
        name,
        email,
        password
      }
      dispatch(registerUser(newUser))
    }
    
  return (

  <div className='registerBG'>
    {
      loading? <h2>loading...</h2> :
      users? <Navigate to = "/login" />
      :
  <Form className='loginF'  onSubmit={handleSubmit}>
    <Form.Group className="mb-3" >
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter full name" value={name} onChange={(e)=>setName(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Sign Up
    </Button>
    or
    <Link to="/login" variant="link" role="button" >Log In</Link>
  </Form>
  }
  </div>
  )
}

export default Register