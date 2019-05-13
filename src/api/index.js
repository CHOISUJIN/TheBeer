import axios from 'axios'

const config = {
    baseUrl : 'https://api.punkapi.com/v2/beers',
    page : 1,
    pageSize : 20
}

function fetchBeerList(page, pageSize) {
    page = page || config.page;
    pageSize = pageSize || config.pageSize;

    return axios.get(`${config.baseUrl}?page=${page}&per_page=${pageSize}`);
}




export {fetchBeerList}