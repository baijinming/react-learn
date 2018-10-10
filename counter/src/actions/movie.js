

export function toggleLoading(flag) {
    return{
        type:"TOGGLE_LOADING",
        flag
    }
}

export function setFlims(flms) {
    return{
        type:"SET_FILMS",
        flms
    }
}

export function getFilms() {
    return function (dispatch,getState) {
        let url="http://m.maizuo.com/v4/api/film/now-playing?__t=1508226688527&page=1&count=5";
        dispatch(toggleLoading(true));
        fetch(url).then(res=>res.json()).then(json=>{
            dispatch(setFlims(json.data.films));
            dispatch(toggleLoading(false))
        }).catch(err=>dispatch(toggleLoading(false)))
    }
}