import axios from 'axios'

const API_URL = 'http://your-api-url.com'

export const getAuthorizedData = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/authorized`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch authorized data: ' + error.message)
  }
}
