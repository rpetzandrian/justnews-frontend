import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Edit = ({ user, register, disabled, setDisabled, handleSubmit, saveEdit, setImg }) => {
  return (
    <>
      <div className='w-100 d-flex justify-content-center position-relative mt-5'>
        <div className='d-flex justify-content-center align-items-center'>
          <Form.Label className='pt-3'>
            <img className='radius' width='100px' height='100px' src={user?.photo ? `${process.env.img_url}${user?.photo}` : '/images/profile-photo.png'} alt='profile-photo' />
            <Form.File id="exampleFormControlFile1" label="Example file input" className='d-none w-100 h-100' onChange={(e) => setImg(e.target.files[0])} />
          </Form.Label>
        </div>
        {!disabled && <p className='position-absolute end-0 float-end' onClick={handleSubmit(saveEdit)}>Save Change</p>}
      </div>

      <section className='px-5 form-edit'>
        <Form className='mt-5'>
          <Row className='justify-content-evenly g-5'>
            <Col xs={12} md={6}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Username : </Form.Label>
                <Form.Control defaultValue={user?.username || 'Not Set'} type="text" placeholder="name@example.com" className='py-4 radius' disabled={disabled} {...register('username')} />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name : </Form.Label>
                <Form.Control defaultValue={user?.name || 'Not Set'} type="text" placeholder="name@example.com" className='py-4 radius' disabled={disabled} {...register('name')} />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Phone : </Form.Label>
                <Form.Control defaultValue={user?.phone} type="text" placeholder="name@example.com" className='py-4 radius' disabled={disabled} {...register('phone')} />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email : </Form.Label>
                <Form.Control defaultValue={user?.email || 'Not Set'} type="text" placeholder="name@example.com" className='py-4 radius' disabled={disabled} {...register('email')} />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password : </Form.Label>
                <Form.Control type="password" placeholder="********" className='py-4 radius' disabled={disabled} {...register('password')} />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Job : </Form.Label>
                <Form.Control defaultValue={user?.job || 'Not Set'} type="text" placeholder="name@example.com" className='py-4 radius' disabled={disabled} {...register('job')} />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>About : </Form.Label>
                <Form.Control defaultValue={user?.bio || 'Not Set'} as="textarea" rows={4} className='p-4 radius' disabled={disabled} {...register('about')} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <div className='w-100 mt-3 d-flex justify-content-center'>
          <Button variant='tranparent' className='text-danger' onClick={() => setDisabled(false)}>
            Edit
          </Button>
        </div>
        <div className='w-100 d-flex justify-content-center'>
          <Button className='w-50 mt-5 mb-3 px-5 py-4 radius'>
            Request to be an author
          </Button>
        </div>
      </section>
    </>
  )
}

export default Edit