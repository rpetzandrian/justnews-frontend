import { useRouter } from 'next/router';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import useUser from '../../data/auth-user';

const Navigation = ({ changeKeyword, query }) => {
  const router = useRouter()
  const { user, loading, loggedOut, mutate } = useUser();

  return (
    <>
      <Navbar bg="light" expand="lg" className='border border-bottom py-2 ff-lato'>
        <Navbar.Brand href="/" className='ms-3 ff-newsreader fw-700 display-1 app-name'>Just News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex mx-auto">
            <Nav.Link href="/" className='mx-5 text-muted active'>Home</Nav.Link>
            <Nav.Link href="/articles" className='mx-5 text-muted'>Articles</Nav.Link>
            <Nav.Link href="/category" className='mx-5 text-muted'>Category</Nav.Link>
            <Nav.Link href="/about" className='mx-5 text-muted'>About</Nav.Link>
          </Nav>
          {!loggedOut ? (
            <div className='d-flex align-items-center'>
              <div className="mx-3 input-group">
                <img className="input-group-text ps-4 group-text" src='/icons/search.svg' alt='search' />
                <input placeholder='Search' type="text" className='form-control py-3 px-4 form-input-group profile' onFocus={() => router.push('/search')} onChange={(e) => changeKeyword({ ...query, search: e.target.value })} />
                <small className='text-danger ms-3 mt-2'></small>
              </div>
              <div className='mx-3 notification'>
                <img src='/icons/notif.svg' als='notif' />
              </div>
              <div className='mx-3 p-1 profile-photo'>
                <img src='/images/placeholder.png' alt='photo' className='img-profile' />
              </div>
            </div>
          ) : (
            <div>
              <Button variant='light' className='px-4 me-3 ff-lato' onClick={() => { router.replace('/signup'); mutate(null) }}>
                Sign Up
              </Button>
              <Button variant='primary' className='px-4 me-3 ff-lato' onClick={() => { router.replace('/login'); mutate(null) }}>
                Login
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar >
    </>
  )
}

export default Navigation;
