import { globalPatch } from "../../../libs/fetcher/fetcher"

export const actionUser = {
  updateUser: (data) => {
    globalPatch({
      url: `${process.env.api_url}/users/${data.userId}`,
      headers: {
        'user-token': `Bearer ${data.token}`,
      },
      data: data.data
    })
  },
}