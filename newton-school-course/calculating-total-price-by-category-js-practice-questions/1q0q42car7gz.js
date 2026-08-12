return function totalByCategory(products,category){
    let ans=products.filter((res)=> res.category===category)
    .reduce((res,anss)=> res+anss.price,0)
    return ans
  
}