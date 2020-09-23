import axios from 'axios'
import config from '../config'

const { API } = config

export function getLinks() {
  try {
    return axios.get(`${API.hostName}/links`).then(response => {
      return response.data
    })
  } catch (err) {
    console.log('Error Calling Links', err.message)
    
    return []
  }
}

export function deleteLink(id) {
  try {
    return axios.delete(`${API.hostName}/link/${id}`).then(response => {
      return response.data
    })
  } catch (err) {
    console.log('Error Calling Links', err.message)
  }
}

export function createLink({ name, url }) {
  try {
    return axios.post(`${API.hostName}/link`, {
      url,
      name
    })
  } catch (err) {
    console.log('error creating link', err)
  }
}