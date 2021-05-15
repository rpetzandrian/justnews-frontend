import Image from 'next/image'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const EditProfile = () => {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col xs={12} lg={4} xl={3} className='pt-5 px-5'>
            <h5>Profile</h5>
            <div className='w-100 mt-5'>
              <Card className='w-100 radius shadow-lg'>
                <Row className='w-100 mx-3 justify-content-center align-items-center'>
                  <Col xs={12} lg={5}>
                    <div className='border p-2 d-flex justify-content-center profile-thumb'>
                      <Image className='radius' width={80} height={80} src='/images/profile-photo.png' alt='profile-photo' />
                    </div>
                  </Col>
                  <Col xs={12} lg={7} className='pt-3'>
                    <p>@Jonathan</p>
                    <h4>Joe Daniel</h4>
                    <p>Member</p>
                  </Col>
                </Row>
                <p className='ms-4 fw-bold'>About me</p>
                <small className='mx-4 mb-5'>
                  Madison Blackstone is a director of publisher, with experience managing global teams.
                </small>
              </Card>
              <div className='mb-5 user-act'>
                <Row className='bg-primary mx-4 text-white px-3 pt-3 radius'>
                  <Col>
                    <div className='text-center'>
                      <p className='num-act'>52</p>
                      <p>post</p>
                    </div>
                  </Col>
                  <Col>
                    <div className='text-center'>
                      <p className='num-act'>52</p>
                      <p>visitor</p>
                    </div>
                  </Col>
                  <Col>
                    <div className='text-center'>
                      <p className='num-act'>52</p>
                      <p>comments</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <section className='mt-5 mb-3 profile-tabs'>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='pt-3'>Edit Profile</p>
                <img className='' src='/icons/angle-right-blue.svg' alt='right-angle'></img>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='pt-3'>Saved Post</p>
                <img className='' src='/icons/angle-right.svg' alt='right-angle'></img>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='pt-3'>FAQ</p>
                <img className='' src='/icons/angle-right.svg' alt='right-angle'></img>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='pt-3'>Help</p>
                <img className='' src='/icons/angle-right.svg' alt='right-angle'></img>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='pt-3'>Logout</p>
                <img className='' src='/icons/angle-right.svg' alt='right-angle'></img>
              </div>
            </section>
          </Col>
          <Col xs={12} lg={8} xl={9} className='px-5'>
            <div className='w-100 d-flex justify-content-center position-relative mt-5'>
              <div className='d-flex justify-content-center align-items-center photo-profile'>
                <Image className='radius' width={100} height={100} src='/images/profile-photo.png' alt='profile-photo' />
              </div>
              <p className='position-absolute end-0 float-end'>Save Change</p>
            </div>

            <section classNama='px-5 form-edit'>
              <Form className='mt-5'>
                <Row className='justify-content-evenly g-5'>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Username : </Form.Label>
                      <Form.Control type="text" placeholder="name@example.com" className='py-4 radius' />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Name : </Form.Label>
                      <Form.Control type="text" placeholder="name@example.com" className='py-4 radius' />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Email : </Form.Label>
                      <Form.Control type="text" placeholder="name@example.com" className='py-4 radius' />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Password : </Form.Label>
                      <Form.Control type="text" placeholder="name@example.com" className='py-4 radius' />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Job : </Form.Label>
                      <Form.Control type="text" placeholder="name@example.com" className='py-4 radius' />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>About : </Form.Label>
                      <Form.Control as="textarea" rows={4} className='p-4 radius' />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              <div className='w-100 d-flex justify-content-center'>
                <Button className='w-50 mt-5 mb-3 px-5 py-4 radius'>
                  Request to be an author
                </Button>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default EditProfile
