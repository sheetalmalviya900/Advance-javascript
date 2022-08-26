//use of spread operator
function sum(a,b,c){
    console.log(a+b+c)
}
arryvar=[3,4,5]
console.log(...arryvar)
sum(...arryvar)

//replace concat
arr1=[1,2,3]
arr2=[4,5,6]
arr3=[7,8,9]
arr1=[...arr1,...arr2,...arr3]
console.log(arr1)

//replace copy
let arr1=[4,5,6]
let arr2=[...arr1,7,8]
console.log(arr2)
