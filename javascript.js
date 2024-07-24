// 1.intersection of two array
let a=[1,2,3,4,5,7,6]
let b=[2,4,6,8,10,12,14]
let c=[]
for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
        if(a[i]==b[j]){
            c.push(a[i])
        }
    }
}
console.log(c)

// 2.difference b/w 2 array

let arr=[1,2,3,4,5,7,6]
let arr1=[2,4,6,8,10,12,14]
let arr2=arr.filter(x => !arr1.includes(x));
arr3=arr1.filter(x => !arr.includes(x));
let arr4=arr2.concat(arr3)
console.log(arr4)

// 3.array intersection of two set

const array1 = [1, 2, 3];
const array2 = [2, 3, 4, 5];
const farray = array1.filter(value => array2.includes(value));
console.log(farray)

//4.grouping array element

const arr5 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const groupedArr = arr5.reduce((acc, current) => {
    if (!acc[current]) {
        acc[current] = [];
    }
    acc[current].push(current);
    return acc;
}, {});
console.log(groupedArr);

//5.array manipulation with slice()

const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr7.splice(2, 3); 
console.log(arr7);