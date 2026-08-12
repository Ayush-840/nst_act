return function totalByCategory(products,category){
    let ans=products.filter((res)=> res.category===category)
    return ans
  
}