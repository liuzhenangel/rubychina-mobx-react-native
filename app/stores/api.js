import { create } from 'apisauce'
import config from '../config'

const api = create({
  baseURL: config.apiBaseURL,
  timeout: 10000,
  headers: {'Accept': 'application/vnd.github.v3+json'}
});

export default api
