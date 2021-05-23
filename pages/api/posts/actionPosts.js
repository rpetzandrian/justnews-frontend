import { globalDelete, globalPatch, globalPost } from "../../../libs/fetcher/fetcher"

export const actionPosts = {
  addPost: (data) => {
    globalPost({
      url: `${process.env.api_url}/posts`,
      data: data,
    })
  },

  likePost: (data) => {
    globalPatch({
      url: `${process.env.api_url}/posts/likes/${data?.userId}/${data?.postId}`,
    })
  },

  unlikePost: (data) => {
    globalDelete({
      url: `${process.env.api_url}/posts/unlikes/${data?.userId}/${data?.postId}`
    })
  }
}