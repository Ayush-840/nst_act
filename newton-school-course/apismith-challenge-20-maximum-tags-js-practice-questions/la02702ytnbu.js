// Your code here
function queryMaximumTags(api){
    let res=fetch(api).then((res)=>res.json())
    
    // for(ch of res){
    //     return ch.tags
    // }
    return res
}