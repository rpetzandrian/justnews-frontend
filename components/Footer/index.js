import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <div className='mt-auto footer'>
        <Row className='justify-content-between bg-primary g-0 text-white py-5 px-5'>
          <Col>
            <p>Why Just News</p>
            <p>Community</p>
            <p>Be an author</p>
            <p>FAQ</p>
          </Col>
          <Col className='text-end'>
            <p>Just News</p>
            <small>
              Jendral Sudirman Street No. 23
                  <br />
                  Jakarta, Indonesia
                </small>
            <br />
            <small>
              (621)989898934
                </small>
            <br />
            <small>
              justnews@mail.com
                </small>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer
