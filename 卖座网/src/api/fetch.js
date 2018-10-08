import "whatwg-fetch"

export default function myFetch(url) {
    return new Promise((resolve,reject)=>{
        fetch(url).then(response=>{
            return response.json();
        }).then(json=>{
            resolve(json)
        }).catch(err=>{
            reject(err)
        })
    })
}