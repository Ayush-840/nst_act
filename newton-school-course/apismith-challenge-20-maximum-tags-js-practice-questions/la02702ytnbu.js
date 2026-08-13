// Your code here
function queryMaximumTags(api){
    return fetch(api).then((res)=>res.json())
    .then(data => {
        const tagCounts = data.map(item => item.tags.length)
        const maxTags = Math.max(...tagCounts)
        return data.filter(item => item.tags.length===maxTags)
    })
    
}