// write your code here
for(let i=1;i<=25;i++){
    if(i%4==0){
        console.log("Quad")
    }if(i%6==0){
        console.log("Hex")
    }if(i%4==0 && i%6==0){
        console.log("")
    }
    else{
        console.log(i)
    }
}