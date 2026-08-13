// write your code here
for(let i=1;i<=25;i++){
    if(i%4==0 && i%6==0){
        console.log("QuadHex")
    }
    if(i%4==0){
        console.log("Quad")
    }if(i%6==0){
        console.log("Hex")
    }else{
        console.log(i)
    }
}