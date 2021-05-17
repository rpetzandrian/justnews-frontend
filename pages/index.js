import axios from 'axios'
import Image from 'next/image'
import { Button, Col, Figure, Row } from 'react-bootstrap'
import useSWR from 'swr'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import PostCard from '../components/PostCard'
import useUser from '../data/auth-user'
import { getPost } from '../libs/fetcher/usePost'
import { getCategory } from '../libs/fetcher/useCategory'

export default function Home() {
  const { user: auth, loading, loggedOut, mutate } = useUser();
  const { data: category, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/category`, getCategory)
  const { data: latestPosts, error: latestErr } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/posts?user_id=${auth?.data?.id || ''}&time=desc`, getPost)
  const { data: recommendedPosts, error: recommErr } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/posts?user_id=${auth?.data?.id || ''}&recomended=true`, getPost)

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
          {/* <div className='mx-3'>#jokowi</div>
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
          <div className='mx-3'>#jokowi</div> */}
        </div>
      </section>

      <section className='px-5 mt-5 category'>
        <h6>Category</h6>
        <div className='d-flex mt-4 overflow-auto'>
          {category?.map(e => {
            return (
              <div className='mx-2 figure'>
                <img width={190} height={200} src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${e?.image}`} />
                <p className='mt-3 text-center'>{e?.category}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className='px-5 mt-5 recommended'>
        <h6>Recommended</h6>
        <div className='d-flex mt-4 overflow-auto'>
          {recommendedPosts?.length < 1 ? (<div>Post Not Found!</div>) : (recommendedPosts?.map(e => {
            return <PostCard data={e} />
          }))}
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
        <div className='d-flex justify-content-evenly flex-wrap mt-3'>
          {latestPosts?.length < 1 ? (<div>Post Not Found!</div>) : (latestPosts?.map(e => {
            return <PostCard data={e} />
          }))}
        </div>
      </section>
      <Footer />
    </>
  )
}

// export async function getServerSideProps() {
//   // `getStaticProps` is invoked on the server-side,
//   // so this `fetcher` function will be executed on the server-side.
//   // try {
//   //   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
//   //   const latestPosts = res.data.data;
//   //   console.log(latestPosts)
//   //   return { props: { latestPosts } };
//   // } catch (err) {
//   //   return { props: { err: true } }
//   // };


//   const result = await getPost(`${process.env.NEXT_PUBLIC_API_URL}/posts?time=asc`)
//   const latestPosts = JSON.stringify(result)

//   return { props: { latestPosts } }
// }
