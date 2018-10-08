import fetch from "./fetch";

//获取轮播图的数据
export function getSlideShow() {
    let url=`https://m.maizuo.com/v4/api/billboard/home?__t=${+new Date()}`
    return fetch(url)
}
//获取正在上映的数据
export function getNowPlaying(page=1,count=5) {
    let url=`https://m.maizuo.com/v4/api/film/now-playing?__t=${+new Date()}&page=${page}&count=${count}`
    return fetch(url)
}
//获取即将上映的数据
export function getComingSoon(page=1,count=3) {
    let url=`https://m.maizuo.com/v4/api/film/coming-soon?__t=${+new Date()}&page=${page}&count=${count}`
    return fetch(url)
}
//获取影片详情的数据
export function getDetail(id) {
    let url=`https://m.maizuo.com/v4/api/film/${id}?__t=${+new Date()}`
    return fetch(url)
}