import { globalDelete, globalPatch, globalPost } from "../../../libs/fetcher/fetcher"

export const actionNotif = {
  readNotif: (userId) => {
    globalPatch({
      url: `${process.env.api_url}/notif/${userId}`
    })
  },

  pushNotif: (data) => {
    globalPost({
      url: `${process.env.api_url}/notif`,
      data: data
    })
  },

  deleteNotif: (data) => {
    globalDelete({
      url: `${process.env.api_url}/notif`,
      data: data
    })
  },

  pusherPushInterest: (data) => {
    globalPost({
      url: `${process.env.api_url}/pusher/push/notif/interest`,
      data: data
    })
  },

  pusherPushUsers: (data) => {
    globalPost({
      url: `${process.env.api_url}/pusher/push/notif/users`,
      data: data
    })
  }
}