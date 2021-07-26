import axios from 'axios'
import Image from 'next/image'
import { useEffect } from 'react'
import { Button, Col, Figure, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import PostCard from '../components/PostCard'
import { useAuth, useCategory, useLatest, useRecommended } from './api'

const tag_list = [
  'jokowi', 'covid', 'mudik', 'technology', 'lebaran', 'teroris', 'radikalisme', 'palestine', 'tes aja'
]

export default function Home({ latest, recommended }) {
  const { auth, loggedOut, mutateAuth } = useAuth();
  const { category } = useCategory()
  const { latest: latestPosts, mutateLatest } = useLatest(auth?.data?.id, { initialData: latest })
  const { recommended: recommendedPosts, mutateRecommended } = useRecommended(auth?.data?.id, { initialData: recommended })

  useEffect(() => {
    mutateAuth()
  }, [])

  return (
    <>
      <Header />
      <Navigation />
      <section className="bg-light p-5 rounded-lg jumbotron">
        <div className='mt-5 py-5'>
          <h1 className="display-4 ff-newsreader fw-700">Share Information and <br></br>Educate People</h1>
          <p className="lead w-50 ff-lato text-shadow">Everyone has their point of view of something, but just don’t be afraid to express the facts. Be an author and share you prespective of something to the world.</p>
          <Button className="btn btn-primary btn-lg" href="#" role="button">Start Exploring</Button>
        </div>
      </section>
      <section className='px-5 mt-5 popular-tags'>
        <h6>Popular Tags</h6>
        <div className='d-flex mt-4 overflow-auto tags'>
          {tag_list?.map(item => {
            return <div className='mx-3'>#{item}</div>
          })}
        </div>
      </section>

      <section className='px-5 mt-5 category'>
        <h6>Category</h6>
        <div className='d-flex mt-4 overflow-auto'>
          {category?.map(e => {
            return (
              <div className='mx-2 figure'>
                <img width={190} height={200} src={`${process.env.img_url}${e?.image}`} />
                <p className='mt-3 text-center'>{e?.category}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className='px-5 mt-5 recommended'>
        <h6>Recommended</h6>
        <div className='d-flex mt-4 overflow-auto tags'>
          {loggedOut ?
            recommended?.post?.length < 1 ? (<div>Post Not Found!</div>) : (recommended?.post?.map(e => {
              return <PostCard data={e} />
            })
            ) : ''}
          {recommendedPosts?.post?.length < 1 ? (<div>Post Not Found!</div>) : (recommendedPosts?.post?.map(e => {
            return <PostCard data={e} cb={mutateRecommended} />
          }))}
        </div>
      </section>

      <section className='p-5 mt-5 rounded-lg bg-info middle-jumbotron'>
        <Row className='p-5 align-items-center'>
          <Col xs={12} md={6}>
            <h3 className='display-5 ff-newsreader'>Let's hear about Kayla's success story</h3>
            <p className='fs-4 ff-lato fw-light'>See how well News Today works in a real user’s life. </p>
            <Button variant='primary'>Let`s get started</Button>
          </Col>
          <Col xs={12} md={6}>
            <Image width={600} height={400} src='/images/Video.png' alt='video' className='mt-3' />
          </Col>
        </Row>
      </section>

      <section className='p-5 mt-5 latest-news'>
        <h6>Latest News</h6>
        <div className='d-flex justify-content-center flex-wrap mt-3'>
          {loggedOut ?
            latest?.post?.length < 1 ? (<div>Post Not Found!</div>) : (latest?.post?.map(e => {
              return <PostCard data={e} />
            })
            ) : ''}
          {latestPosts?.post?.length < 1 ? (<div>Post Not Found!</div>) : (latestPosts?.post?.map(e => {
            return <PostCard data={e} cb={mutateLatest} />
          }))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const resultLatest = await axios.get(`${process.env.api_url}/posts?time=desc`, {
    headers: {
      'Origin': 'http://localhost:3000'
    }
  })
  const latest = await resultLatest.data.data

  const resultRecommended = await axios.get(`${process.env.api_url}/posts?recomended=true`, {
    headers: {
      'Origin': 'http://localhost:3000'
    }
  })
  const recommended = await resultRecommended.data.data

  return { props: { latest, recommended } }

}
