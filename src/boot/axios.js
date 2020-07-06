import Vue from 'vue'
import axios from 'axios'
const baseURL = 'http://localhost:3000/'

Vue.prototype.$axios = axios.create({ baseURL: baseURL })
export default { axios }
