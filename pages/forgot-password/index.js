import { Button, Col, Form, Row } from "react-bootstrap";

const Forgot = () => {
  return (
    <>
      <Row className='g-0 max-h'>
        <Col xs={12} md={6} className='bg-forgot d-flex flex-column justify-content-between'>
          {/* <img width='75%' src='/images/forgot-cover.png' alt='cover' className='h-100' /> */}
        </Col>
        <Col xs={12} md={6} className='my-auto'>
          <div className='mx-auto auth-side mt-5'>
            <h4>DON`T WORRY</h4>
            <p className='text-muted mb-5'>We are here to help you to recover your password. Enter your email adress that you used to register and we’ll give you instructions to reset your password.</p>
            <Form>
              <Form.Group controlId="formBasicEmail" className='my-3'>
                {/* <Form.Label>Email address: </Form.Label> */}
                <Form.Control className='py-3 form-rounded' type="email" placeholder="Enter email" />
              </Form.Group>
              <Button className='btn border-0 bg-transparent w-25 float-start py-3 px-5 mt-3 text-info'>
                Resend Link
              </Button>
              <Button className='btn btn-auth-st w-25 float-end py-3 px-5 mt-3'>
                Send
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Forgot
