
// if username is not present then it will ask user to input the user name and then it will log in


function makeMyTrip(username="")
{
  if(!username){
        console.log("please enter username")
        return
    }
        return `${username} just logged in`
}
console.log(makeMyTrip("Ms Dhoni"))
