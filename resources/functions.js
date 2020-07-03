const TOKEN = process.env.TOKEN
const URI = 'https://api.unsplash.com/photos/?client_id='

export const getListImg = async () => {
    try {
        var getData = await fetch(URI + TOKEN)
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