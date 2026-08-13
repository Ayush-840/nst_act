function categorizeByKey(api, key){
    return fetch(api).then((res)=> res.json())
    .then((items)=>{
        let res={}
        for(let item of items){
            if(key in item){
                let group=item[key]
                if(!result)
            }
        }
    })
}