import { useRouter } from 'next/router'
import { Col, Dropdown, Row } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import PostCard from '../../components/PostCard'

const Search = () => {
  const router = useRouter()

  console.log(router)
  return (
    <>
      <Navigation />
      <section className='px-5 mt-5'>
        <p className='fw-bold'>Search result for “COVID19”</p>
      </section>
      <section className='px-5 mt-5 related-tags'>
        <h6>Related Tags</h6>
        <div className='d-flex mt-4 overflow-auto'>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
          <div className='mx-3'>#jokowi</div>
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
        <p className='ms-3 pt-3 text-muted'>Sort by <strong>Category</strong></p>
      </section>
      <section className='px-5 mb-5'>
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
          <Col xs={12} sm={6} lg={4} xl={3}>
            <PostCard />
          </Col>
        </Row>
        <p className='text-muted fw-bold mt-5 text-center'>End of Result</p>
      </section>
      <Footer />
    </>
  )
}

export default Search
