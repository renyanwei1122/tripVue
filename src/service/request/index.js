import { BASE_URL,TIMEOUT } from "./config";
import axios from 'axios'
import useMainStore from "@/store/modules/main";

const mainStore = useMainStore()
class HYRequest {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout:TIMEOUT
    })

    //采用拦截器
    this.instance.interceptors.request.use(config => {
      mainStore.isshowLoading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      mainStore.isshowLoading = false
      return res
    }, err => {
      mainStore.isshowLoading = false
      return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  get(config) {
    return this.request({...config, method:"get"})
  }
  post(config) {
    return this.request({...config, method:"post"})
  }
}

export default new HYRequest(BASE_URL)