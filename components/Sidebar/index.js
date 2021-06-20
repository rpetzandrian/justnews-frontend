import { Card, Col, Row } from 'react-bootstrap'
import { actionAuth, useAuth, useUser } from '../../pages/api'

const Sidebar = ({ user, mutateAuth, actionAuth, tabs, setTabs }) => {
  return (
    <>
      <h5>Profile</h5>
      <div className='w-100 mt-5'>
        <Card className='w-100 radius shadow-lg'>
          <Row className='w-100 mx-3 justify-content-center align-items-center'>
            <Col xs={12} lg={5}>
              <div className='border-0 p-2 d-flex justify-content-center'>
                <img className='radius' width='80px' height='80px' src={user?.photo ? `${process.env.img_url}${user?.photo}` : '/images/profile-photo.png'} alt='profile-photo' />
              </div>
            </Col>
            <Col xs={12} lg={7} className='pt-3'>
              <p>@{user?.username || 'Not Set'}</p>
              <h4>{user?.username || 'Not Set'}</h4>
              <p>{user?.role === 'admin' ? 'Admin' : 'Member'}</p>
            </Col>
          </Row>
          <p className='ms-4 fw-bold'>About me</p>
          <small className='mx-4 mb-5'>
            {user?.about || 'Not Set'}
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
        <div className='d-flex justify-content-between align-items-center' onClick={() => setTabs('edit')}>
          <p className='pt-3'>Edit Profile</p>
          <img className='' src={`/icons/angle-right${tabs === 'edit' ? '-blue' : ''}.svg`} alt='right-angle'></img>
        </div>
        <div className='d-flex justify-content-between align-items-center' onClick={() => setTabs('saved')}>
          <p className='pt-3'>Saved Post</p>
          <img className='' src={`/icons/angle-right${tabs === 'saved' ? '-blue' : ''}.svg`} alt='right-angle'></img>
        </div>
        <div className='d-flex justify-content-between align-items-center' onClick={() => setTabs('faq')}>
          <p className='pt-3'>FAQ</p>
          <img className='' src={`/icons/angle-right${tabs === 'faq' ? '-blue' : ''}.svg`} alt='right-angle'></img>
        </div>
        <div className='d-flex justify-content-between align-items-center' onClick={() => setTabs('help')}>
          <p className='pt-3'>Help</p>
          <img className='' src={`/icons/angle-right${tabs === 'help' ? '-blue' : ''}.svg`} alt='right-angle'></img>
        </div>
        <div className='d-flex justify-content-between align-items-center' onClick={() => { mutateAuth(actionAuth.authLogout()) }}>
          <p className='pt-3'>Logout</p>
          <img className='' src='/icons/angle-right.svg' alt='right-angle'></img>
        </div>
      </section>
    </>
  )
}

export default Sidebar
