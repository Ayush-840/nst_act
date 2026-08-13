// Your code here
function queryMaximumTags(api){
    let res=fetch(api).then((res)=>res.json())
    .then(data => {
        const tagCounts = data.map(item => item.tags.length)
    })

    // for(ch of res){
    //     return ch.tags
    // }
    return res
}