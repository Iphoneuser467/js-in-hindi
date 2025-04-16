

const promiseTwo=new Promise(function(resolve,reject){
setTimeout(function(){
    let error=false
    if(!error)
    {
    resolve({username:"prakash" , email:"prakash@gmail.com"})
    }
    else{
        reject("Error: Something went wrong")
    }
},3000)
})

promiseTwo.then(function(user){
console.log(user)
return user.email
})
.then(function(email){
    console.log(email)
})
.catch(function(error){
    console.log(error)
})







