// Your code here
function queryMaximumTags(api){
    let res=fetch(api)
    let data = res.json()
    return data
}