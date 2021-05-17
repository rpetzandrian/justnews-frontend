import moment from 'moment'
import { useRouter } from 'next/router'
import { mutate } from 'swr'
import useUser from '../../data/auth-user'
import { likeOrUnlike } from '../../libs/fetcher/usePost'

const PostCard = ({ data }) => {
  const router = useRouter()
  const { user: auth, loggedOut } = useUser()

  const like = () => {
    if (!loggedOut) {
      mutate(likeOrUnlike(`${process.env.NEXT_PUBLIC_API_URL}/posts/likes/${auth?.data?.id}/${data?.id}`, 'PATCH'))
    }
  }

  const unlike = () => {
    if (!loggedOut) {
      mutate(likeOrUnlike(`${process.env.NEXT_PUBLIC_API_URL}/posts/unlikes/${auth?.data?.id}/${data?.id}`, 'DELETE'))
    }
  }

  return (
    <>
      <div className="card mx-2 my-2 post-card shadow-lg border-0" style={{ minHeight: '140px', minWidth: '318px', maxHeight: '198px', maxWidth: '320px' }}>
        <div className="row g-0">
          <div className="col-4 p-0">
            <img width='100px' height='140px' src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${data?.cover}`} alt="cover" onClick={() => router.push(`/articles/${data?.id}`)} />
          </div>
          <div className="col-8">
            <div className="card-body d-flex flex-column h-100">
              <h5 className="card-title">{data?.tags}</h5>
              <p className="card-text" onClick={() => router.push(`/articles/${data?.id}`)}>{data?.title}</p>
              <div className="card-text mt-auto">
                <div className='d-flex text-muted'>
                  <div className='d-flex ms-2 justify-content-center align-items-center'>
                    {!data?.is_liked ?
                      (<img src='/icons/likes.svg' alt='Add like' onClick={() => { like() }} />)
                      :
                      (<img src='/icons/likes-blue.svg' alt='Add like' onClick={() => { unlike() }} />)
                    }
                    <small className='ms-2'>{data?.like}</small>
                  </div>
                  <div className='d-flex ms-2 justify-content-center align-items-center'>
                    <img src='/icons/time.svg' alt='Add like' />
                    <small className='ms-2'>{moment(`${data?.publish_at}`).fromNow()}</small>
                  </div>
                  <div className='d-flex ms-2'>
                    <img src='/icons/Bookmark.svg' alt='Save' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCard
