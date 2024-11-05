//destructuring assignments

let arr=[1,2,3,4,5,6]
const[a,b,c,d,e,f]=arr
console.log(a,b,c,d,e,f)

//default parameters

function sum(a,b=0){
    console.log(a+b)
}
sum(7,5)


function sum(a,b=0){
    console.log(a*b)
}
sum(7,5)



// spread operators

let arr1=[1,2,3,4,5,6,7,8,9]
let arr2=[...arr1]
console.log(arr2)


let arr3=[1,2,3,4,5,6,7,8,9]
let arr4=[...arr3]
console.log(arr4)

let obj1={name:"sai"}
let obj2={city:"hyd",mobile:"954626496546"}
let obj3={...obj1, ...obj2}
console.log(obj3)

// Rest Operators

function sum(a,...d){
    console.log(a)
    console.log(d)
    
}
sum(1,2,3,4,5,6,7,8,9,22,44,75,100)


function sum(...d){
    total=0
    for(i of d ){
    total=total+i
}
    console.log(total)
    }
sum(1,2,3,4,5,6,7,8,9,22,44,75,100)

//

let arr5=[1,2,3,4,65,7,9,55,88,95]
function add(...a){
    total=0
    for(i of a){
        total=total+i
    }
    console.log(i)

}
sum(...arr5)
// arr.sort(a,b)=> a-b)
// console.log(arr)



//shallow copy

let original=[1,2,3]
let copy=original
copy[0]=10
console.log(original)


//
let obj={
    name:"sai"
}
obj2=obj
obj2.name="prince"
console.log(obj2)


// deep copy

let arr6=[1,2,3]
let s=JSON.parse(JSON.stringify(arr6))
s[0]=10
console.log(arr6)


obj={
    name:"sai"
}
obj2=JSON.parse(JSON.stringify(obj))
obj2.name="prince"
console.log(obj)
console.log(obj2)