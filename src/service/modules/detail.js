import hyRequest from "@/service/request/index.js"

export function getDetailInfos(houseId) {
  return hyRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}