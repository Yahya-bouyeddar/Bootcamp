// 1)
const users = { user1: 18273, user2: 92833, user3: 90315 }
const result = Object.entries(users)
console.log(result);
// 2)
const multi = result.map(function([key,value]){
    return [key,value*2]
})

console.log(multi);


