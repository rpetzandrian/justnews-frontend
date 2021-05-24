import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import useSWR from 'swr'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'
import { getById } from '../../../libs/fetcher/usePost'
import { useAuth } from '../../api'

const ArticleDetail = () => {
  const { id } = useRouter().query
  const router = useRouter()
  const { auth, loggedOut, mutateAuth } = useAuth();
  const { data: post } = useSWR(`${process.env.api_url}/posts/${id}?user_id=${auth?.data?.id}`, getById)

  useEffect(() => {
    if (loggedOut) router.replace('/')
  }, [loggedOut])

  return (
    <>
      <Navigation />
      <section className='px-5 mt-5 article-detail-head'>
        <div className='px-5 mt-5 d-flex justify-content-between'>
          <div className='d-flex' onClick={() => router.back()}>
            <img src='/icons/back.svg' alt='back' />
            <p className='ms-3 pt-3'>Back</p>
          </div>
          <p className='pt-3'>Article Viewer</p>
          <p></p>
        </div>
      </section>

      {post && (
        <>
          <section className='px-5 mt-5'>
            <Row className='align-items-center'>
              <Col xs={12} md={6} className='mt-3'>
                <img className='article-cover' src={`${process.env.img_url}${post?.cover} `} alt='' />
              </Col>
              <Col xs={12} md={6} className='mt-3'>
                <h3>{post?.title}</h3>
                <p className='mt-5 mb-0'>{post?.author} - Author</p>
                <small className='text-muted mt-0'>{moment(`${post?.publish_at} `, 'YYYYMMDD').format('dddd, MMM Do YYYY')}</small>
                <div className='d-flex mt-3'>
                  <div className='d-flex justify-content-start align-items-center'>
                    <img src='/icons/likes.svg' alt='likes' />
                    <p className='mx-3 pt-3'>{post?.like}</p>
                  </div>
                  <img width='24px' src='/icons/Bookmark-white.svg' alt='save' />
                </div>
                <Button variant='dark' className='w-100 py-4 radius mt-3'>
                  Share Article Link
                </Button>
              </Col>
            </Row>
          </section>

          <section className='px-5 mt-3 article-text'>
            <p>
              {post?.text}
            </p>
          </section>
        </>
      )}

      <section className='px-5 mt-5 comment'>
        <h6>Comments</h6>
        <Row>
          <Col xs={12} md={10}>
            <div className='d-flex align-items-center w-100 mt-3 form-add-comment'>
              <div>
                <Image width={55} height={55} src='/images/profile-photo.png' alt='' />
              </div>
              <div className='mx-3 w-100'>
                <p className='p-0'>You</p>
                <div className='d-flex justify-content-start align-items-center w-100'>
                  <Form className='p-0'>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control placeholder='Insert a comment' as="textarea" rows={1} className='comment-form' />
                    </Form.Group>
                  </Form>
                  <p className='mx-3'>Submit</p>
                </div>
              </div>
            </div>

            <div className='d-flex align-items-center w-100 mt-3'>
              <div>
                <Image width={55} height={55} src='/images/profile-photo.png' alt='' />
              </div>
              <div className='mx-3 w-100'>
                <p className='p-0'>User - 1 min ago</p>
                <p>Ini commentIni commentIni commentIni commentIni commentIni commentIni commentIni comment</p>
              </div>
            </div>

            <p className='text-muted mt-4 mb-5'>No comment left</p>
          </Col>
        </Row>
      </section >
      <Footer />
    </>
  )
}

export default ArticleDetail
