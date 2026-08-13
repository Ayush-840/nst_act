// Your code here
function queryMaximumTags(api){
    let res=fetch(api).then((res)=>res.json()).then((ans)=>ans.tags)
    // let data = res.json()
    // let ans= res.tags
    return res
}