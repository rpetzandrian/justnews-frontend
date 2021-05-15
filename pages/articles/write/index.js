import Image from "next/image"
import { Card, Col, Form, Row, Button } from "react-bootstrap"
import Footer from "../../../components/Footer"
import Navigation from "../../../components/Navigation"

const WriteArticle = () => {
  return (
    <>
      <Navigation />
      <div className='px-5 mt-5 d-flex justify-content-between'>
        <div className='d-flex'>
          <img src='/icons/back.svg' alt='back' />
          <p className='ms-3 pt-3'>Back</p>
        </div>
        <p className='pt-3'>Write Articles</p>
        <p className='pt-3'>Save as draft</p>
      </div>
      <section className='px-5 mt-5'>
        <Row className='g-3 mb-5 form-write'>
          <Col xs={12} md={4} lg={3} className='d-flex align-items-end flex-column'>
            <Card className='rounded w-100 h-100 upload-box mb-3'>
              <form encType='multipart/form-data' className='h-100'>
                <Card.Body className='h-100'>
                  <label className='rounded text-center d-flex justify-content-center upload-dropbox'>
                    <input type='file' className='w-100 h-100 d-none' />
                    <Image width={100} height={100} src='/icons/plus.svg' alt='plus' />
                  </label>
                </Card.Body>
              </form>
            </Card>
            <Button variant='dark' className='w-100 text-center mt-auto py-3 rounded'>
              Chosee Cover
            </Button>
          </Col>
          <Col xs={12} md={8} lg={9}>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Article Title" className='py-3 rounded upload-box' />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control placeholder='Article category' as="select" className='py-3 rounded upload-box'>
                      <option selected>Article Category</option>
                      <option>Economy</option>
                      <option>Politic</option>
                      <option>Sport</option>
                      <option>Culture</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Col xs={9} className='d-flex justify-content-start my-2'>
                <p className='pt-3'>Attachment :</p>
                <img src='/icons/Image.svg' alt='image' className='mx-2' />
                <img src='/icons/Play.svg' alt='video' className='mx-2' />
                <img src='/icons/Align.svg' alt='align' className='mx-2' />
                <img src='/icons/Link.svg' alt='link' className='mx-2' />
                <img src='/icons/Scale.svg' alt='text' className='mx-2' />
              </Col>
              <Col xs={12}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control placeholder='Type the Article' as="textarea" rows={20} className='py-3 rounded upload-box' />
                </Form.Group>
              </Col>
            </Form>
            <Button variant='primary' className='w-100 text-center mt-3 py-3 rounded'>
              Request Publish Article
            </Button>
          </Col>
        </Row>
      </section>
      <Footer />
    </>
  )
}

export default WriteArticle
