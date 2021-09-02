import moment from "moment";
import { useRouter } from "next/router";
import { actionNotif, actionPosts, useAuth, useUser } from "../../pages/api";

const PostCard = ({ data, cb }) => {
  const router = useRouter();
  const { auth, loggedOut } = useAuth();
  const { data: user } = useUser({
    id: auth?.data?.id,
    token: auth?.data?.token,
  });

  const like = () => {
    if (!loggedOut) {
      cb(
        actionPosts.likePost({
          userId: auth?.data?.id,
          postId: data?.id,
        })
      );

      if (auth?.user?.id != data?.user_id) {
        actionNotif.pushNotif({
          user_id: data?.user_id,
          from: auth?.data?.id,
          type: "like",
          message: "just liked your post",
          post_id: data?.id,
        });
        const users = data?.user_id;
        actionNotif.pusherPushUsers({
          users: [users],
          title: "JustNews",
          body: `@${user?.username || "anonymous"} just liked your post`,
          link: `${process.env.origin}/articles/${data?.slug}`,
        });
      }
    }
  };

  const unlike = () => {
    if (!loggedOut) {
      cb(
        actionPosts.unlikePost({
          userId: auth?.data?.id,
          postId: data?.id,
        })
      );
    }
  };

  const save = () => {
    if (!loggedOut) {
      cb(
        actionPosts.savePost({
          userId: auth?.data?.id,
          postId: data?.id,
        })
      );
    }
  };

  const unsave = () => {
    if (!loggedOut) {
      cb(
        actionPosts.unsavePost({
          userId: auth?.data?.id,
          postId: data?.id,
        })
      );
    }
  };

  return (
    <>
      <div
        className="card mx-2 my-2 post-card shadow-sm border-0 cursor"
        style={{
          minHeight: "140px",
          minWidth: "318px",
          maxHeight: "198px",
          maxWidth: "320px",
        }}
      >
        <div className="row g-0">
          <div className="col-4 p-0">
            <img
              width="100px"
              height="140px"
              src={`${process.env.img_url}${data?.cover}`}
              alt="cover"
              onClick={() => router.push(`/articles/${data?.slug}`)}
            />
          </div>
          <div className="col-8">
            <div className="card-body d-flex flex-column h-100">
              <h5 className="card-title">{data?.tags}</h5>
              <p
                className="card-text"
                onClick={() => router.push(`/articles/${data?.slug}`)}
              >
                {data?.title}
              </p>
              <div className="card-text mt-auto">
                <div className="d-flex text-muted">
                  <div className="d-flex ms-2 justify-content-center align-items-center">
                    {!data?.is_liked ? (
                      <img
                        src="/icons/likes.svg"
                        alt="Add like"
                        onClick={() => {
                          like();
                        }}
                      />
                    ) : (
                      <img
                        src="/icons/likes-blue.svg"
                        alt="Add like"
                        onClick={() => {
                          unlike();
                        }}
                      />
                    )}
                    <small className="ms-2">{data?.like || 0}</small>
                  </div>
                  <div className="d-flex ms-2 justify-content-center align-items-center">
                    <img src="/icons/time.svg" alt="Add like" />
                    <small className="ms-2">
                      {moment(`${data?.publish_at}`).fromNow()}
                    </small>
                  </div>
                  <div className="d-flex ms-2">
                    {!data?.is_saved ? (
                      <img
                        width="18px"
                        src="/icons/Bookmark-white.svg"
                        alt="Save"
                        onClick={() => {
                          save();
                        }}
                      />
                    ) : (
                      <img
                        src="/icons/Bookmark.svg"
                        alt="Save"
                        onClick={() => {
                          unsave();
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
