let arr=[1,2,3,4,5,6,7,8,9]

console.log(arr)
console.log(arr.toString());
console.log(arr.includes(3))
arr.push(77)
arr.push(88)
console.log(arr)
arr.pop()
arr.pop()
console.log(arr);
// slice will trim the elements from first index inclusive to last index exclusive and it doesnot removes any elements from the actual array

let arr2=arr.slice(1,5)
console.log(arr2)

// splice means it will print the number from index 1 to last index inclusive but it removes all the elements from actual array
console.log(arr.splice(1,5)) 
console.log(arr)



let ar=[1,2,3,4,5]
let ar1=[6,7,8,9,0]
let arrw=ar.concat(ar1)
console.log(arrw)
console.log(Arrays.sort(arrw))

