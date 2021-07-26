import Image from 'next/image'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useForm } from 'react-hook-form'
import { actionAuth, actionUser, useAuth, useSavedPost, useUser } from '../api'
import Sidebar from '../../components/Sidebar'
import { Edit, Saved } from '../../components/Profile'


const Profile = () => {
  const router = useRouter()
  const { auth, loggedOut, mutateAuth, loadingAuth } = useAuth()
  const { data: user, mutateUser, loadingUser } = useUser({ id: auth?.data?.id, token: auth?.data?.token })
  const { savedPost, mutateSavedPost } = useSavedPost(auth?.data?.id)

  const [tabs, setTabs] = useState('edit')
  const [disabled, setDisabled] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [img, setImg] = useState(null)

  useEffect(() => {
    if (!loadingAuth && loggedOut) router.replace('/')
  }, [auth, loadingAuth])

  const saveEdit = (data) => {
    const formData = new FormData()
    data.email ? formData.append('email', data.email || undefined) : ''
    data.name ? formData.append('name', data.name || undefined) : ''
    data.username ? formData.append('username', data.username || undefined) : ''
    data.phone ? formData.append('phone', data.phone || undefined) : ''
    data.job ? formData.append('job', data.job || undefined) : ''
    data.about ? formData.append('bio', data.about || undefined) : ''
    data.password ? formData.append('password', data.password || undefined) : ''
    img ? formData.append('photo', img || undefined) : ''

    mutateUser(actionUser.updateUser({
      data: formData,
      userId: auth?.data?.id,
      token: auth?.data?.token
    }))

    setDisabled(true)
  }

  return (
    <>
      {!loadingAuth && !loadingUser && (<>
        <Navigation />
        <Container fluid>
          <Row>
            <Col xs={12} lg={4} xl={3} className='pt-5 px-5'>
              <Sidebar
                user={user}
                mutateAuth={mutateAuth}
                actionAuth={actionAuth}
                tabs={tabs}
                setTabs={setTabs}
              />
            </Col>
            <Col xs={12} lg={8} xl={9} className='px-5'>
              {tabs === 'edit' && (
                <Edit
                  user={user}
                  saveEdit={saveEdit}
                  register={register}
                  handleSubmit={handleSubmit}
                  disabled={disabled}
                  setDisabled={setDisabled}
                  setImg={setImg}
                />
              )}
              {tabs === 'saved' && (
                <Saved
                  post={savedPost}
                  mutate={mutateSavedPost}
                />
              )}
            </Col>
          </Row>
        </Container>
        <Footer />
      </>)}
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
