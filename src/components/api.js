const api = process.env.REACT_APP_GIPHY_KEY


const getGifs = async (offset = 0, query = "", rating = 'g') => {
    const uri = `https://api.giphy.com/v1/gifs/${!query.trim() ? 'trending' : 'search'}?api_key=${api}${query.trim() ? '&q=' + query.trim() : ''}&limit=20&offset=${offset}&rating=${rating}&lang=en`

    const obj = { gifs: [], total_count: 0 }

    try {

        const m = await fetch(uri)

        const { data, meta, pagination } = await m.json()
        obj.total_count = pagination?.total_count || 0

        for await (let i of data) {
            const { url, title, images, id } = i
            const { fixed_height_downsampled, original } = images
            const state = { url, id, title, gifurl: fixed_height_downsampled.url, original: original.url }
            obj.gifs.push(state)
        }
        return obj

    } catch (err) {
        console.log(err)
    }

}

const getFeeds = async (page) => {


    try {
        const url = await fetch(`https://www.reddit.com/r/${page}/new.json?sort=new&limit=50`)
        const { data } = await url.json()
        const { children } = await data

        return children.map(child => {
            const { selftext, title, downs, ups, created, author, media, is_video } = child

            return {
                selftext,
                title,
                downs,
                ups,
                created: new Date(created * 1000),
                author,
                media,
                isVideo: is_video
            }
        })

    } catch (err) {
        console.log(err)
    }


}

export { getGifs }