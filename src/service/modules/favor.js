import hyRequest from "@/service/request/index.js"

export function getFavorData() {
  return hyRequest.get({
    url:"/favor/list"
  })
}