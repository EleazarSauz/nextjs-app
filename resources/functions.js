const TOKEN = process.env.TOKEN
const URI = 'https://api.unsplash.com/'

export const getListPhoto = async (page=0) => {
    try {
        var getData = await fetch(`${URI}photos/?client_id=${TOKEN}&per_page=12&page=${page}`)
        var parseData = await getData.json()
        if (getData.status === 400) {
            throw parseData;
        }
    
        return parseData
    } catch (error) {
        console.error('getListRepoApi', error)
        throw error;
    }
}

export const getDataPhoto = async (photo) => {
    try {
        var getData = await fetch(`${URI}photos/${photo}/?client_id=${TOKEN}`)
        var parseData = await getData.json()
        if (getData.status === 404 || getData.status === 400) {
            throw parseData;
        }
    
        return parseData
    } catch (error) {
        console.error('getListRepoApi', error)
        throw error;
    }
}