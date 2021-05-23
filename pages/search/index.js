import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Col, Dropdown, Row } from 'react-bootstrap'
import useSWR, { useSWRInfinite } from 'swr'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import PostCard from '../../components/PostCard'
import useUser from '../../data/auth-user'
import { getPost } from '../../libs/fetcher/usePost'

const Search = ({ initialPosts }) => {
  const { user: auth, loading, loggedOut, mutate } = useUser();
  const router = useRouter()
  const [query, setQuery] = useState({})
  const [page, setPage] = useState([])
  const { data: posts } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/posts?user_id=${auth?.data?.id}&search=${router?.query?.search}&name=${router?.query?.name || ''}&time=${router?.query?.time || ''}&limit=1&page=${router?.query?.page || 1}`, getPost, { initialData: initialPosts })

  useEffect(() => {
    if (loggedOut) {
      router.replace('/')
    }
  }, [loggedOut])

  useEffect(() => {
    let total = []
    if (posts.total_pages > 0) {
      for (let x = 0; x < posts.total_pages; x++) {
        total.push(x + 1)
      }
    }
    setPage([...total])
  }, [posts])

  useEffect(() => {
    if (query) {
      router.push({
        pathname: '/search',
        query: {
          search: query.search,
          page: query.page,
          [query.type || '']: query.value || ''
        }
      })
    } else {
      router.push({
        pathname: '/search',
      })
    }
  }, [query])

  return (
    <>
      <Navigation changeKeyword={setQuery} query={query} />
      <section className='px-5 mt-5'>
        <p className='fw-bold'>Search result for "{`${query?.search} `}"</p>
      </section>
      <section className='px-5 mt-5 popular-tags'>
        <h6>Related Tags</h6>
        <div className='d-flex mt-4 overflow-auto tags'>
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
            <Dropdown.Item onClick={() => setQuery({ ...query, type: 'name', value: 'asc' })} >Name ( A - Z )</Dropdown.Item>
            <hr />
            <Dropdown.Item onClick={() => setQuery({ ...query, type: 'name', value: 'desc' })}>Name ( Z - A )</Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-3">Category</Dropdown.Item>
            <hr />
            <Dropdown.Item onClick={() => setQuery({ ...query, type: 'time', value: 'desc' })}>Last Added</Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-3">Last Modified</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <img src='/icons/Filter.svg' alt='filter' /> */}
        <p className='ms-3 pt-3 text-muted'>Sort by <strong>Category</strong></p>
      </section>
      <section className='px-5 mb-5'>
        <div className='d-flex justify-content-evenly flex-wrap mt-3'>
          {posts?.post?.length >= 1 ? posts?.post?.map(e => {
            return <PostCard data={e} />
          }) : (<div>Post not found</div>)}
        </div>
        <div className='d-flex justify-content-center flex-wrap mt-3'>
          <select onChange={e => setQuery({ ...query, page: e.target.value })}>
            {page !== [] && page?.map(e => {
              return (
                <option value={e} >{e}</option>
              )
            })}
          </select>
        </div>
        {/* <p className='text-muted fw-bold mt-5 text-center'>End of Result</p> */}
      </section>
      <Footer />
    </>
  )
}

export default Search

export async function getStaticProps() {
  const resultPost = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?time=asc&limit=1`, {
    headers: {
      'Origin': 'http://localhost:3000'
    }
  })
  const initialPosts = await resultPost.data.data

  return { props: { initialPosts } }

}
