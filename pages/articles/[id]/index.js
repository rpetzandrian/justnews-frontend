import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Footer from '../../../components/Footer'
import Navigation from '../../../components/Navigation'

const ArticleDetail = () => {
  const { id } = useRouter().query

  return (
    <>
      <Navigation />
      <section className='px-5 mt-5 article-detail-head'>
        <div className='px-5 mt-5 d-flex justify-content-between'>
          <div className='d-flex'>
            <img src='/icons/back.svg' alt='back' />
            <p className='ms-3 pt-3'>Back</p>
          </div>
          <p className='pt-3'>Article Viewer</p>
          <p></p>
        </div>
      </section>

      <section className='px-5 mt-5'>
        <Row className='align-items-center'>
          <Col xs={12} md={6} className='mt-3'>
            <img className='article-cover' src='/images/jumbotron.png' alt='' />
          </Col>
          <Col xs={12} md={6} className='mt-3'>
            <h3>Thailand at the 2019 Southeast Asian Games</h3>
            <p className='mt-5 mb-0'>Richard Gervain - Author</p>
            <small className='text-muted mt-0'>Wed, March 3rd 2021</small>
            <div className='d-flex mt-3'>
              <div className='d-flex justify-content-start align-items-center'>
                <img src='/icons/likes.svg' alt='likes' />
                <p className='mx-3 pt-3'>21K</p>
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
          During the 2019 Southeast Asian Games, governor the Sports Authority of Thailand (SAT) Kongsak Yodmanee criticised the organization of the games, as the Philippines held the games in many cities and municipalities, causing to the various concerns and controversies. He will propose to hold the next Thailand's Southeast Asian Games in "one" city or province. He also suggested Bangkok and Chonburi Province are the best choice for hosting the Thailand's games. He mentioned Bangkok traffic is less congested than Manila and the city has many existing venues for the games but water sports venues.

          Bangkok hosted the inaugural games in 1959 and 1967 as Southeast Asian Peninsular Games, which were the precursor to the modern Southeast Asian Games, and 1985 as Southeast Asian Games. Bangkok hosted many global and continental events such as four-time Asian Games and Summer Universiade in 2007.

          Bangkok will host the 2021 Asian Indoor and Martial Arts Games with Chonburi Province It acted as the test event and a prelude for the future multi-sport event, a proposed Youth Olympic Games in 2026.

          During the 2019 Southeast Asian Games, governor the Sports Authority of Thailand (SAT) Kongsak Yodmanee criticised the organization of the games, as the Philippines held the games in many cities and municipalities, causing to the various concerns and controversies. He will propose to hold the next Thailand's Southeast Asian Games in "one" city or province. He also suggested Bangkok and Chonburi Province are the best choice for hosting the Thailand's games. He mentioned Bangkok traffic is less congested than Manila and the city has many existing venues for the games but water sports venues.

          Bangkok hosted the inaugural games in 1959 and 1967 as Southeast Asian Peninsular Games, which were the precursor to the modern Southeast Asian Games, and 1985 as Southeast Asian Games. Bangkok hosted many global and continental events such as four-time Asian Games and Summer Universiade in 2007.

          Bangkok will host the 2021 Asian Indoor and Martial Arts Games with Chonburi Province It acted as the test event and a prelude for the future multi-sport event, a proposed Youth Olympic Games in 2026.

        </p>
      </section>

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
