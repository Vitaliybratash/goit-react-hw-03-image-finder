import  axios  from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29899773-97d974b810a6d3eead0ca4bfb';
export async function getData(input, page = 1) {
  const config = {
    url: BASE_URL,
    params: {
      q: input,
      page: page,
      key: KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  };
  try {
    const request = await axios(config)
    return request.data
  } catch (error) {
    console.log(error.message)
  }
}
