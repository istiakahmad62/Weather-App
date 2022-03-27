import ApiClient from './apiClient'
import endPoints from './endPoint'
import apiKey from '../api/apiKey'

class WeatherInfoApi extends ApiClient {
    getApiCall({ cityName }) {
        return this.get(endPoints.baseUrl, `q=${cityName}&appid=${apiKey}&units=metric`)
    }
}

export default WeatherInfoApi