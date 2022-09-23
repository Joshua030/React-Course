export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SbT4Zbn6pvx5AB31kqxieokBsviKEVGf&q=${category}&limit=20`
    const answ = await fetch (url);
    const {data} = await answ.json();
    const gifs = data.map ( ({id,title,images}) => ({
    id : id,
    title : title,
    url : images.downsized_medium.url

//     const gifs = data.map(img => ({
//    id: img.id,
//    title: img.title,
//    url: img.images.downsized_medium.url

    }))
return gifs;
}