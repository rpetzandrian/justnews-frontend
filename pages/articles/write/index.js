import Image from "next/image"
import dynamic from 'next/dynamic'
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import Footer from "../../../components/Footer"
import Navigation from "../../../components/Navigation"
import { actionPosts, useAuth, useCategory } from "../../api"
import 'react-quill/dist/quill.snow.css';
import TurndownService from "turndown";
const Quill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

const WriteArticle = () => {
  const turndownService = new TurndownService()
  const router = useRouter()
  const { auth, loggedOut, mutateAuth, loadingAuth } = useAuth()
  const { category } = useCategory()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [cover, setCover] = useState(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (!loadingAuth && loggedOut) router.replace('/')
  }, [auth, loadingAuth])

  const handleChange = value => {
    setTimeout(() => {
      const markdown = turndownService.turndown(value);
      setValue(markdown)
    })
  }

  const add = (data) => {
    console.log(value)
    const formData = new FormData()
    data.title ? formData.append('title', data.title) : ''
    data.category_id ? formData.append('category_id', data.category_id) : ''
    // data.text ? formData.append('text', data.text) : ''
    value ? formData.append('text', value) : ''
    cover ? formData.append('cover', cover) : ''
    auth?.data?.id ? formData.append('user_id', auth?.data?.id) : ''

    actionPosts.addPost(formData)
  }

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
                    <input type='file' className='w-100 h-100 d-none' onChange={(e) => setCover(e.target.files[0])} />
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
                    <Form.Control type="text" placeholder="Article Title" className='py-3 rounded upload-box' {...register('title')} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control placeholder='Article category' as="select" className='py-3 rounded upload-box' {...register('category_id')}>
                      <option value={0} selected>Article Category</option>
                      {category?.map(e => {
                        return <option value={e.id}>{e.category}</option>
                      })}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              {/* <Col xs={9} className='d-flex justify-content-start my-2'>
                <p className='pt-3'>Attachment :</p>
                <img src='/icons/Image.svg' alt='image' className='mx-2' />
                <img src='/icons/Play.svg' alt='video' className='mx-2' />
                <img src='/icons/Align.svg' alt='align' className='mx-2' />
                <img src='/icons/Link.svg' alt='link' className='mx-2' />
                <img src='/icons/Scale.svg' alt='text' className='mx-2' />
              </Col> */}
              <Col xs={12}>
                <Quill className='upload-box mt-3' modules={modules} placeholder='Insert content here...' formats={formats} theme="snow" onChange={(e) => handleChange(e)}>
                  <div className='overflow-auto' style={{ minHeight: '50vh', maxHeight: '51vh' }} ></div>
                </Quill>
              </Col>
            </Form>
            <Button variant='primary' className='w-100 text-center mt-3 py-3 rounded' onClick={handleSubmit(add)}>
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
