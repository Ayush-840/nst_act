function extract(arr) {
    let out=[]
    let ans = arr.map((res)=>res.filter((ress)=>ress%2==0))
    if(ans.length%2==0){
        out.push(ans)
    }
    return out
}