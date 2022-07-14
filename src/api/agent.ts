
import { UserModel } from '@project/models/userModel';
import axios, { AxiosError} from 'axios'
import { toast } from 'react-toastify'

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500)); 

axios.defaults.baseURL = 'https://not-real-endpoint.smallworld.ai/form';

const responseBody = (response: any) => response.data; 

axios.interceptors.response.use(
  async (response) => {
    await sleep()
    return response
  },
  (error: AxiosError) => {
    /*@ts-ignore*/
    const { data, status } = error.response
    console.log("Failed Response", error.response)
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = []
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key])
            }
          }
          throw modelStateErrors.flat()
        }
        toast.error(data.title)
        break
      case 401:
        toast.error(data.title)
        break
      case 500:
        toast.error("Failed to fetch form data")
        break
      case 0: 
        toast.error("Endpoint is inactive")
        break;
      default:
        break
    }
    return Promise.reject(error.response)
  } 
)

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
  }

const FormInfo = {
    list:() => requests.get(''),
    submitForm:(user:UserModel) => requests.post('', {})
}

const agent = {
    FormInfo
}; 

export default agent; 

