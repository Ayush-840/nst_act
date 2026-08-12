return function totalByCategory(products,category){
    let ans=products.filter((res)=> res.category===category)
    .reduce((res,anss)=> res.price+anss,0)
  
}