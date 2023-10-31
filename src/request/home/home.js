import getData from '../index.js'

// getData为自己创建的axios实例
// 获取轮播图数据
export function getSwiper(){
    return getData({
        method:"GET",
        url:"/banner?type=2",
    })
}
// 发现好歌单
export function getMusicList(){
    return getData({
        method:"GET",
        // /playlist/highquality/tags
        url:"/personalized?limit=10"
    })
}
export function getMusicItemList(data){
    return getData({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
export function getSongUrl(songid){
    return getData({
        method:'GET',
        url:`/song/url?id=${songid}`,
        
    })
}