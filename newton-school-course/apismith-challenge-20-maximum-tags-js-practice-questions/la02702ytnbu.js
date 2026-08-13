// Your code here
function queryMaximumTags(api){
    return fetch(api).then((res)=> res.json())
    .then(data=>{
        data.map(tag=> tag.tags.length)
        
    })
}