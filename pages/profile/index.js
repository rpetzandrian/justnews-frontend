import Image from 'next/image'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import useUser from '../../data/auth-user'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getUser, updateUser } from '../../libs/fetcher/useUser'
import useSWR from 'swr'
import { useForm } from 'react-hook-form'


const Profile = () => {
  const router = useRouter()
  const { user: auth, loggedOut, mutate: authMutate } = useUser();
  const { data, error, mutate: userMutate } = useSWR([`${process.env.NEXT_PUBLIC_API_URL}/users/${auth?.data?.id}`, auth?.data?.token], getUser);

  const [disabled, setDisabled] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [img, setImg] = useState(null)

  useEffect(() => {
    if (loggedOut) router.replace('/')
  }, [loggedOut])

  const saveEdit = (data) => {
    const formData = new FormData()
    data.email ? formData.append('email', data.email || undefined) : ''
    data.name ? formData.append('name', data.name || undefined) : ''
    data.username ? formData.append('username', data.username || undefined) : ''
    data.phone ? formData.append('phone', data.phone || undefined) : ''
    data.job ? formData.append('job', data.job || undefined) : ''
    data.about ? formData.append('about', data.about || undefined) : ''
    data.password ? formData.append('password', data.password || undefined) : ''
    img ? formData.append('photo', img || undefined) : ''

    userMutate(updateUser(`${process.env.NEXT_PUBLIC_API_URL}/users/${auth?.data?.id}`, auth?.data?.token, formData))

    setDisabled(true)
  }

  return (
    <>
      <Navigation />
      {data && (

        <Container fluid>
          <Row>
            <Col xs={12} lg={4} xl={3} className='pt-5 px-5'>
              <h5>Profile</h5>
              <div className='w-100 mt-5'>
                <Card className='w-100 radius shadow-lg'>
                  <Row className='w-100 mx-3 justify-content-center align-items-center'>
                    <Col xs={12} lg={5}>
                      <div className='border p-2 d-flex justify-content-center profile-thumb'>
                        <img className='radius' width='80px' height='80px' src={data.photo ? `${process.env.NEXT_PUBLIC_IMG_BASE_URL}${data.photo}` : '/images/profile-photo.png'} alt='profile-photo' />
                      </div>
                    </Col>
                    <Col xs={12} lg={7} className='pt-3'>
                      <p>@{data.username || 'Not Set'}</p>
                      <h4>{data.username || 'Not Set'}</h4>
                      <p>{data.role === 'admin' ? 'Admin' : 'Member'}</p>
                    </Col>
                  </Row>
                  <p className='ms-4 fw-bold'>About me</p>
                  <small className='mx-4 mb-5'>
                    {data.about || 'Not Set'}
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
                <div className='d-flex justify-content-between align-items-center' onClick={() => { localStorage.clear(); authMutate(null) }}>
                  <p className='pt-3'>Logout</p>
                  <img className='' src='/icons/angle-right.svg' alt='right-angle'></img>
                </div>
              </section>
            </Col>
            <Col xs={12} lg={8} xl={9} className='px-5'>
              <div className='w-100 d-flex justify-content-center position-relative mt-5'>
                <div className='d-flex justify-content-center align-items-center photo-profile'>
                  <Form.Label className='pt-3'>
                    <img className='radius' width='100px' height='100px' src={data.photo ? `${process.env.NEXT_PUBLIC_IMG_BASE_URL}${data.photo}` : '/images/profile-photo.png'} alt='profile-photo' />
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
                        <Form.Control defaultValue={data.username || 'Not Set'} type="text" placeholder="name@example.com" className='py-4 radius' disabled={disabled} {...register('username')} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name : </Form.Label>
                        <Form.Control defaultValue={data.name || 'Not Set'} type="text" placeholder="name@example.com" className='py-4 radius' disabled={disabled} {...register('name')} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone : </Form.Label>
                        <Form.Control defaultValue={data.phone} type="text" placeholder="name@example.com" className='py-4 radius' disabled={disabled} {...register('phone')} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email : </Form.Label>
                        <Form.Control defaultValue={data.email || 'Not Set'} type="text" placeholder="name@example.com" className='py-4 radius' disabled={disabled} {...register('email')} />
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
                        <Form.Control defaultValue={data.job || 'Not Set'} type="text" placeholder="name@example.com" className='py-4 radius' disabled={disabled} {...register('job')} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>About : </Form.Label>
                        <Form.Control defaultValue={data.about || 'Not Set'} as="textarea" rows={4} className='p-4 radius' disabled={disabled} {...register('about')} />
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
            </Col>
          </Row>
        </Container>
      )
      }
      <Footer />
    </>
  )
}

export default Profile

// export async function getStaticProps() {
//   // `getStaticProps` is invoked on the server-side,
//   // so this `fetcher` function will be executed on the server-side.
//   const user = await axios({
//     url: `${process.env.NEXT_PUBLIC_API_URL}/users/${getvalue('id')}`,
//     headers: {
//       'token': `Bearer ${getvalue('token')}`
//     },
//     method: 'GET'
//   }).then(res => {
//     return res.data.data
//   }).catch(err => {
//     return err.response
//   })
//   return { props: { user } }
// }
