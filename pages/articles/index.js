import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import PostCard from '../../components/PostCard';

const Articles = () => {
  return (
    <>
      <Navigation />

      <section class="bg-light p-5 rounded-lg jumbotron-2">
        <div className='mt-5 py-5'>
          <h1 class="display-4">Start Writing an <br></br>Article</h1>
          <p class="lead w-50">You can be an author by being active in reading artciles in a month or you can request to be an author if you have been a member for three months.</p>
          <Button class="btn btn-primary btn-lg" href="#" role="button">Start Writing</Button>
        </div>
      </section>

      <section className='px-5 mt-5 d-flex align-items-center filter-article'>
        <Dropdown>
          <Dropdown.Toggle variant='transparent' id="dropdown-basic">
            <img src='/icons/Filter.svg' alt='filter' />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Name ( A - Z )</Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-2">Name ( Z - A )</Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-3">Category</Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-3">Last Added</Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-3">Last Modified</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <img src='/icons/Filter.svg' alt='filter' /> */}
        <p className='ms-3 pt-3'>Filter Article: sort by <strong>Category</strong></p>
      </section>

      <section className='px-5 mt-5'>
        <h6>Todays news</h6>
        <Row className='g-2 mt-4 justify-content-lg-between'>
          <Col xs={12} sm={6} lg={4} xl={3}>
            <PostCard />
          </Col>
          <Col xs={12} sm={6} lg={4} xl={3}>
            <PostCard />
          </Col>
          <Col xs={12} sm={6} lg={4} xl={3}>
            <PostCard />
          </Col>
        </Row>
      </section>

      <section className='w-100 mt-5 mb-3 text-center last'>
        <p>Load another 30+ category</p>
      </section>
      <Footer />
    </>
  )
}

export default Articles;
