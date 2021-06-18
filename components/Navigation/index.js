import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { actionNotif, useAuth, useNotif, useUser } from '../../pages/api';
import NotificationCard from '../NotificationCard';

const Navigation = ({ changeKeyword, query }) => {
  const router = useRouter()
  const { auth, loggedOut, mutateAuth } = useAuth();
  const { data: user, mutateUser } = useUser({ id: auth?.data?.id, token: auth?.data?.token });
  const [notifShow, setNotifShow] = useState(false);
  const { notif, mutateNotif } = useNotif({ userId: auth?.data?.id })

  const asActive = (arg) => {
    if (router.pathname.split('/')[1] === arg) return 'active'
  }

  const readNotif = () => {
    mutateNotif(actionNotif.readNotif(auth?.data?.id))
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className='border border-bottom py-2 ff-lato'>
        <Navbar.Brand href="/" className='ms-3 ff-newsreader fw-700 display-1 app-name'>Just News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex mx-auto">
            <Nav.Link href="/" className={`mx-5 text-muted ${asActive('')}`}>Home</Nav.Link>
            <Nav.Link href="/articles" className={`mx-5 text-muted ${asActive('articles')}`}>Articles</Nav.Link>
            <Nav.Link href="/category" className={`mx-5 text-muted ${asActive('category')}`}>Category</Nav.Link>
            <Nav.Link href="/about" className={`mx-5 text-muted ${asActive('about')}`}>About</Nav.Link>
          </Nav>
          {!loggedOut ? (
            <div className='d-flex align-items-center'>
              <div className="mx-3 input-group">
                <img className="input-group-text ps-4 group-text" src='/icons/search.svg' alt='search' />
                <input placeholder='Search' type="text" className='form-control py-3 px-4 form-input-group profile' onFocus={() => router.push('/search')} onChange={(e) => changeKeyword({ ...query, search: e.target.value })} />
                <small className='text-danger ms-3 mt-2'></small>
              </div>
              <div className='mx-3 notification'>
                <img src={`/icons/${notif?.unreadNotif > 0 ? 'notif-read' : 'notif'}.svg`} als='notif' onClick={() => { setNotifShow(!notifShow); notif?.unreadNotif > 0 ? readNotif() : null }} />
              </div>
              <div className='mx-3 p-1 profile-photo'>
                <img width='36px' height='36px' src={`${process.env.img_url}${user?.photo}`} alt='photo' className='rounded-circle img-profile' onClick={() => router.push('/profile')} />
              </div>
            </div>
          ) : (
            <div>
              <Button variant='light' className='px-4 me-3 ff-lato' onClick={() => { router.replace('/signup'); mutateAuth(null) }}>
                Sign Up
              </Button>
              <Button variant='primary' className='px-4 me-3 ff-lato' onClick={() => { router.replace('/login'); mutateAuth(null) }}>
                Login
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar >
      <NotificationCard show={notifShow} data={notif?.notif} />
    </>
  )
}

export default Navigation;
