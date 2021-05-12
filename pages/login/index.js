import { Button, Col, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Row className='g-0 max-h'>
        <Col xs={12} md={6} className='bg-primary d-flex flex-column justify-content-between'>
          <div className='ms-4 mt-5 w-100'>
            <img src='' alt='' />
            <h5 className='text-white'>Home Page</h5>
          </div>
          <div className='text-center mx-auto auth-side'>
            <h1 className='text-white'>Just<br />News</h1>
            <p className='text-white'>justnews@gmail.com</p>
            <div className='mt-5 d-flex justify-content-center align-items-center'>
              <div className='hr mx-3'></div>
              <p className='text-center text-white pt-3'>Not have an account?</p>
              <div className='hr mx-3'></div>
            </div>
            <Button className='btn btn-auth-nd w-75 py-3 px-5 mt-3'>Signup Here</Button>
          </div>
          <div className='d-flex justify-content-between mx-auto text-white mt-3 mb-5 auth-side'>
            <div>
              <p>Why Just News ?</p>
              <p>Community</p>
            </div>
            <div>
              <p>Be an author</p>
              <p>FAQ</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className='my-auto'>
          <div className='mx-auto auth-side mt-5'>
            <h4>Login</h4>
            <p className='text-muted mb-5'>Hey, welcome back to News Today!</p>
            <Form>
              <Form.Group controlId="formBasicEmail" className='my-3'>
                <Form.Label>Email address: </Form.Label>
                <Form.Control className='py-3 form-rounded' type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className='my-3'>
                <Form.Label>Password: </Form.Label>
                <Form.Control className='py-3 form-rounded' type="password" placeholder="Password" />
              </Form.Group>
              <Button className='btn btn-auth-st w-100 py-3 px-5 mt-3'>
                Login
              </Button>
            </Form>
            <p className='fw-bold text-center mt-5'>OR LOGIN WITH</p>
            <div className='d-flex justify-content-center mb-5'>
              <img src='/icons/google.svg' alt='' className='mx-3' />
              <img src='/icons/fb.svg' alt='' className='mx-3' />
              <img src='/icons/twitter.svg' alt='' className='mx-3' />
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Login
