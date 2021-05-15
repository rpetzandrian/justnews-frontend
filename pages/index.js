import Image from 'next/image'
import { Button, Col, Figure, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <>
      <Navigation />
      <section className="bg-light p-5 rounded-lg jumbotron">
        <div className='mt-5 py-5'>
          <h1 className="display-4">Share Information and <br></br>Educate People</h1>
          <p className="lead w-75">Everyone has their point of view of something, but just don’t be afraid to express the facts. Be an author and share you prespective of something to the world.</p>
          <Button className="btn btn-primary btn-lg" href="#" role="button">Start Exploring</Button>
        </div>
      </section>
      <section className='px-5 mt-5 popular-tags'>
        <h6>Popular Tags</h6>
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

      <section className='px-5 mt-5 category'>
        <h6>Category</h6>
        <div className='d-flex mt-4 overflow-auto'>
          <div className='mx-2 figure'>
            <img width={190} height={200} src='/images/goverment.png' />
            <p className='text-center'>Goverment</p>
          </div>
          <div className='mx-2 figure'>
            <img width={190} height={200} src='/images/goverment.png' />
            <p className='text-center'>Goverment</p>
          </div>
          <div className='mx-2 figure'>
            <img width={190} height={200} src='/images/goverment.png' />
            <p className='text-center'>Goverment</p>
          </div>
          <div className='mx-2 figure'>
            <img width={190} height={200} src='/images/goverment.png' />
            <p className='text-center'>Goverment</p>
          </div>
          <div className='mx-2 figure'>
            <img width={190} height={200} src='/images/goverment.png' />
            <p className='text-center'>Goverment</p>
          </div>
        </div>
      </section>

      <section className='px-5 mt-5 recommended'>
        <h6>Recommended</h6>
        <div className='d-flex mt-4 overflow-auto'>
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>

      <section className='p-5 mt-5 rounded-lg bg-info middle-jumbotron'>
        <Row className='p-5 align-items-center'>
          <Col xs={12} md={6}>
            <h3>Let's hear about Kayla's success story</h3>
            <p>See how well News Today works in a real user’s life. </p>
            <Button variant='primary'>Let`s get started</Button>
          </Col>
          <Col xs={12} md={6}>
            <Image width={600} height={400} src='/images/Video.png' alt='video' className='mt-3' />
          </Col>
        </Row>
      </section>

      <section className='p-5 mt-5 latest-news'>
        <h6>Latest News</h6>
        <Row className='g-2 mt-4'>
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
      </section>
      <Footer />
    </>
  )
}
