// Write your code here...
const str = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
if(str==="add"){
    return num1+num2
}else if(str==="subtract"){
    return num1-num2
}else if(str==="multiply"){
    return num1*num2
}else if(str==="divide"){
    return num1/num2
}