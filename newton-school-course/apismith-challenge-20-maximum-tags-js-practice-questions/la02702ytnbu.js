// Your code here
function queryMaximumTags(api){
    let res=fetch(api).then((res)=>res.json())
    .then(data => {
        const tagCounts = data.map(item => item.tags.length)
        const maxTags = ma(...tagCounts)
        return data.filter(item => item.tags.length===maxTags)
    })

    // for(ch of res){
    //     return ch.tags
    // }
    // return res
}