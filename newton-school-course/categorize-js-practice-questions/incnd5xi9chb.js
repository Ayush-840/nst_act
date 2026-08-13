function categorizeByKey(api, key){
    let data=fetch(api).then((res)=> res.json())
    return data
}