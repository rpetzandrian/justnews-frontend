import Image from 'next/image'

const PostCard = (props) => {
  return (
    <>
      <div className="card mx-2 post-card" style={{ minHeight: '196px', minWidth: '318px', maxHeight: '198px', maxWidth: '320px' }}>
        <div className="row g-0">
          <div className="col-4 p-0">
            <Image width={100} height={180} src="/images/goverment.png" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body d-flex flex-column h-100">
              <h5 className="card-title">Tags</h5>
              <p className="card-text">For title post</p>
              <div className="card-text mt-auto">
                <div className='d-flex text-muted'>
                  <div className='d-flex ms-2 justify-content-center align-items-center'>
                    <img src='/icons/likes.svg' alt='Add like' />
                    <small className='ms-2'>2.1 K</small>
                  </div>
                  <div className='d-flex ms-2 justify-content-center align-items-center'>
                    <img src='/icons/likes.svg' alt='Add like' />
                    <small className='ms-2'>3m ago</small>
                  </div>
                  <div className='d-flex ms-2'>
                    <img src='/icons/Bookmark.svg' alt='Add like' />
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
