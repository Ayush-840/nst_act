// Your code here
function queryMaximumTags(api){
    return fetch(api).then((res)=> res.json())
    .then(data=>{
        const cnt=data.map(tag => tag.tags.length)
        const mxcnt=Math.max(...cnt)
        

    })
}