// memory are stored in two ways stack and heap where primitive stores in stack and non primitive in heap 
// stack gives the duplicate value of the things we searcch for
// whereas heap references to a point and gives the real value also changes in one which references to the same point will change the value of both

// Eg:

let bik=function(){
    
    console.log("What ra!!!!")
}


let bikash=
{
    name:"BikashNayak",
    class:4,
    rollno:40
}

let bikashTwo=bikash 
bikashTwo.rollno=10,
console.log(bikashTwo.rollno)
console.log(bikash.rollno)
