import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { actionAuth, useAuth } from '../api'
import { useSignup } from "../../libs/fetcher/useAuth";

const Signup = () => {
  const router = useRouter()
  const { loggedOut, mutateAuth } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const signup = async (data) => {
    mutateAuth(actionAuth.authRegister(data))
  }

  useEffect(() => {
    if (!loggedOut) {
      router.replace('/')
    }
  }, [loggedOut])

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
            <div className='mt-2 mt-md-5 d-flex justify-content-center align-items-center'>
              <div className='hr mx-3'></div>
              <p className='text-center text-white pt-3'>Already have an account?</p>
              <div className='hr mx-3'></div>
            </div>
            <Button className='btn btn-auth-nd w-75 py-3 px-5 mt-3'>Login Here</Button>
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
            <h4>Sign up</h4>
            <p className='text-muted mb-5'>Hey, welcome to News Today! Create an account to enjoy our full features!</p>

            <Form onSubmit={handleSubmit(signup)}>
              <Form.Group controlId="formBasicEmail" className='my-3'>
                <Form.Label>Email address: </Form.Label>
                <Form.Control className={`py-3 form-rounded ${errors.email ? 'is-invalid' : ''}`} type="email" placeholder="Enter email" {...register('email', { required: 'Please insert an email!' })} />
              </Form.Group>
              <small className='text-danger'>{errors?.email?.message}</small>

              <Form.Group controlId="formBasicPassword" className='my-3'>
                <Form.Label>Password: </Form.Label>
                <Form.Control className={`py-3 form-rounded ${errors.password ? 'is-invalid' : ''}`} type="password" placeholder="Password" {...register('password', { required: 'Please insert a password!' })} />
              </Form.Group>
              <small className='text-danger'>{errors?.password?.message}</small>

              <Form.Group controlId="formBasicPhone" className='my-3'>
                <Form.Label>Phone Number: </Form.Label>
                <Form.Control className={`py-3 form-rounded ${errors.phone ? 'is-invalid' : ''}`} type="text" placeholder="Phone number" {...register('phone', { required: 'Please insert a phone number!' })} />
              </Form.Group>
              <small className='text-danger'>{errors?.phone?.message}</small>
            </Form>
            <Button className='btn btn-auth-st w-100 py-3 px-5 mt-3' onClick={handleSubmit(signup)}>
              Signup
            </Button>
            <p className='fw-bold text-center mt-5'>OR SIGNUP WITH</p>
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

export default Signup
