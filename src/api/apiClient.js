import axios from 'axios'

export default class ApiClient {
    get(url, param) {
        url = param ? `${url}?${param}` : url
        return axios.get(url)
                    .then((response) => response.data)
                    .catch((err) => err)
    }
}