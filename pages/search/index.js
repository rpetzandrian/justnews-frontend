import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Col, Dropdown, Row } from 'react-bootstrap'
import useSWR from 'swr'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import PostCard from '../../components/PostCard'
import useUser from '../../data/auth-user'
import { getPost } from '../../libs/fetcher/usePost'

const Search = () => {
  const { user: auth, loading, loggedOut, mutate } = useUser();
  const router = useRouter()
  const [query, setQuery] = useState({
  })
  const { data: posts, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/posts?user_id=${auth?.data?.id}&search=${router?.query?.search || ''}&name=${router?.query?.name || ''}&time=${router?.query?.time || ''}`, getPost)

  useEffect(() => {
    router.push({
      pathname: '/search',
      query: {
        search: query.search,
        [query.type || '']: query.value || ''
      }
    })
  }, [query])

  return (
    <>
      <Navigation changeKeyword={setQuery} query={query} />
      <section className='px-5 mt-5'>
        <p className='fw-bold'>Search result for "{`${query?.search} `}"</p>
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
          {posts?.length >= 1 ? posts?.map(e => {
            return <PostCard data={e} />
          }) : (<div>Post not found</div>)}
        </div>
        <p className='text-muted fw-bold mt-5 text-center'>End of Result</p>
      </section>
      <Footer />
    </>
  )
}

export default Search
