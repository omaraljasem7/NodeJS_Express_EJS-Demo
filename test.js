let users = [
    {id:1,name:'Max',email:'max@gmail.com'},
    {id:2,name:'test',email:'test@test.com'},
    {id:3,name:'tom',email:'tom@google.com'}

]
console.log(users)
let id = 1;
const index= users.findIndex(b => {
    return b.id === id;
})
const newUser= {name:'Omar'}
console.log(index)
if(index === 0 ){
    users[index] = {
        id:id,
        ...newUser
    }
}
console.log(users)


let splice = users.splice(0,2);
console.log('splice')
console.log(splice);

console.log('.......')
console.log(users)