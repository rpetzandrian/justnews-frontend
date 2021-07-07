import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { actionAuth, useAuth } from "../api";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const Login = () => {
  const router = useRouter();
  const { auth, loggedOut, mutateAuth, loadingAuth } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const login = data => actionAuth.authLogin(data),
    resGoogleSuccess = res => actionAuth.authLogin({ ...res.profileObj, provider: 'google' }),
    responseFacebook = res => actionAuth.authLogin({ ...res, imageUrl: res.picture.data.url, provider: 'facebook' })

  useEffect(() => {
    if (!loggedOut && !loadingAuth) {
      router.replace('/')
    }
  }, [loggedOut, auth])


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
            <Form onSubmit={handleSubmit(login)}>
              <Form.Group className='my-3'>
                <Form.Label>Email address: </Form.Label>
                <Form.Control data-testid='email-input-login' className={`py-3 form-rounded ${errors.email ? 'is-invalid' : ''}`} type="email" placeholder="Enter email" {...register('email', { required: 'Please insert an email!' })} required />
              </Form.Group>
              <small className='text-danger'>{errors?.email?.message}</small>

              <Form.Group controlId="formBasicPassword" className='my-3'>
                <Form.Label>Password: </Form.Label>
                <Form.Control className={`py-3 form-rounded ${errors.password ? 'is-invalid' : ''}`} type="password" placeholder="Password" {...register('password', { required: 'Please insert a password!' })} />
              </Form.Group>
              <small className='text-danger'>{errors?.password?.message}</small>
              <Button className='btn btn-auth-st w-100 py-3 px-5 mt-3' onClick={handleSubmit(login)}>
                Login
              </Button>
            </Form>
            <p className='fw-bold text-center mt-5'>OR LOGIN WITH</p>
            <div className='d-flex justify-content-center mb-5'>
              {/* <a href='http://localhost:5000/justnews/api/v1/auth/login/google' target='_self'>
                <img src='/icons/google.svg' alt='' className='mx-3' />
              </a> */}
              <GoogleLogin
                clientId='726602830819-994nsh23tecqtg094t6gtmv2o4df0mjm.apps.googleusercontent.com'
                render={renderProps => (
                  <img src='/icons/google.svg' alt='' className='mx-3' onClick={renderProps.onClick} disabled={renderProps.disabled} />
                )}
                onSuccess={resGoogleSuccess}
              />
              <FacebookLogin
                appId="505359304005541"
                fields="name,email,picture"
                render={renderProps => (
                  <img src='/icons/fb.svg' alt='' className='mx-3' onClick={renderProps.onClick} disabled={renderProps.disabled} />
                )}
                callback={responseFacebook} />
              {/* <img src='/icons/twitter.svg' alt='' className='mx-3' /> */}
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Login
