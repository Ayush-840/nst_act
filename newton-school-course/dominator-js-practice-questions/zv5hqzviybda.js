function extract(arr) {
    let out=[]
    let ans = arr.map((res)=>res.filter((ress)=>ress%2==0)).filter()
    // if(ans.length%2==0){
    //     out.push(ans)
    // }
    let ans1=ans.map((res)=>(res.length)%2==0)
    return ans1
}