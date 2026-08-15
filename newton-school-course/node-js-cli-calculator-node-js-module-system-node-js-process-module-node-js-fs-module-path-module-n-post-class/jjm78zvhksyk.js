// Write your code here...
const str = process.agrv[2]
const num1 = Number(process.agrv[3])
const num2 = Number(process.agrv[4])
if(str==="add"){
    return num1+num2
}if(str==="subtract"){
    return num1-num2
}if(str==="multiply"){
    return num1*num2
}if(str==="divide"){
    return num1/num2
}