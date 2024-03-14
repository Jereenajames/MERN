import Form from 'react-bootstrap/Form';

const Signup =() =>{
    return <div>
        <h2 className="display-4 text-center">Signup</h2>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter the User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter the Email " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="email" placeholder="Enter the Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Confrim Password</Form.Label>
        <Form.Control type="email" placeholder="Enter the Password" />
      </Form.Group>
   
    </Form>
    </div>
}
export default Signup;