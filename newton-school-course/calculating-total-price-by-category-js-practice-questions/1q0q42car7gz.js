return function totalByCategory(products,category){
    let ans=products.filter((res)=> res.category===category)
    .reduce((res,too)=> res + products)
  
}