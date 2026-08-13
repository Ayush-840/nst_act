// Your code here
function queryMaximumTags(api){
    let res=fetch(api).then((res)=>res.json())
    let data = res.json()
    return data
}