import axios from 'axios'

export default (url, query = {}, method = 'get') => {
    const instance = axios.create({
        method,
        baseURL: 'https://m.maizuo.com',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"157494359298784248620"}',
          'X-Host': url
        }
    });
    const queryURL = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
    //console.log(queryURL,instance);
    return instance(`/gateway?${queryURL}`);
}