// 1. Develop a basic Express.js application that simulates a simple user management system. The application should define a /users route that allows interaction through different HTTP methods. Begin by initializing an in-memory array to hold user objects, where each object includes three properties: id, name, and email. Implement functionality to return all users using the GET method on /users. Allow new users to be added via the POST method to the same route. Each new user should receive a unique ID that increments sequentially. Additionally, implement the DELETE method on /users/:id to remove a specific user by ID. Ensure that the application uses express.json() middleware to parse incoming JSON request bodies, and return appropriate JSON responses for each action. Include basic error handling to display a clear message when attempting to delete a user that does not exist.

import express from 'express';

const app = express()
const port = 3000

app.use(express.json())
let users = [
    {id:1,name:"jude",email:"jude@hotmail.com"},
    {id:2,name:"carlo",email:"carlo@gmail.com"}
]

app.get('/',(req,res) => {
    res.send(users);
})

app.post('/users', (req,res)=>{
    const {name, email} = req.body
    const newUser = {
        id:users.length+1,
        name,
        email
    }
    users.push(newUser);
    res.status(201).send(`Users added: ${JSON.stringify(newUser)}`)
})

app.put('/users/:id',(req,res)=>{
    const userID = parseInt(req.params.id);
    const {name, email} = req.body
    const user = users.find(u=> u.id===userID);

    if(!user){
        return res.status(404).send("User not found")
    }

    user.name = name || user.name;
    user.email = email || user.email;
    
    res.send(`User updated: ${JSON.stringify(user)}`)
})

app.delete('/users/:id',(req,res)=>{
    const userID = parseInt(req.params.id);
    const index = users.findIndex(u=>u.id === userID)

    if(index === -1){
        return res.status(404).send("User not found")
    }

    const deleteUser = users.splice(index,1)
    res.send(`User deleted: ${JSON.stringify(deleteUser[0])}`)
})


app.listen(port,()=>{
    console.log(`Port running on http://localhost:${port}`);
})
