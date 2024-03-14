import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Signup =() =>{
const [user, setUser] = useState({
    username : "",
    email : "",
    password : "",
    confirmPassword : ""
});

    return <div>
        <h2 className="display-4 text-center">Signup</h2>
        <Form className=' me-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter the User Name" name='username' value={user.}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter the Email " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="email" placeholder="Enter the Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Confrim Password</Form.Label>
        <Form.Control type="email" placeholder="Enter the Password Again" />
      </Form.Group>
   
      <Button variant="primary">Register</Button>{' '}
      <Button variant="secondary">Cancle</Button>{' '}
    </Form>
    </div>
}
export default Signup;