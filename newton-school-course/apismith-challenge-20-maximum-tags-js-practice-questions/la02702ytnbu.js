// Your code here
function queryMaximumTags(api){
    let res=fetch(api).then((res)=>res.json())
    // let data = res.json()
    // let ans= res.tags
    for(ch of res){
        return ch.tags
    }
    return res
}