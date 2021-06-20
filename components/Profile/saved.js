import PostCard from "../PostCard"

const Saved = ({ post, mutate }) => {
  return (
    <>
      <div className='text-center mt-5 text-primary'>
        <h5>Saved Post</h5>
      </div>
      <div className='mt-5 mb-5 saved-post'>
        <div className='d-flex justify-content-center flex-wrap overflow-auto notif-scroll' style={{ maxHeight: '100vh' }}>
          {post && post?.post?.map(item => {
            return <PostCard data={item} cb={mutate} />
          })}
        </div>
        <div className='mt-5 text-center'>
          <p className='text-muted'>You have no saved post left</p>
        </div>
      </div>
    </>
  )
}

export default Saved
