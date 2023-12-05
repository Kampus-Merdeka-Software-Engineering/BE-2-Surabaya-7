const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const prisma = new PrismaClient() 

app.use(bodyParser.json())

function LoggerMiddleware(req, res, next){
    console.log(`Request api received at:${new Date()}`)
    next();
}



app.get('/', (req, res) => {
    res.send('hello gais');
})


// endpoint get all users
app.get('/users', (req, res) => {
const { keyword, search } = req.query;
let data = [
        {
            name: 'Ziad jhonson',
            email: 'ziad.jhonson@gmail.com',
            password: 'midlaner'
        },
        {
        name: 'Ziadiyah',
        email: 'ziadiyah@gmail.com',
        password: 'carry'
        },
        {
            name: 'Ziad',
            email: 'ziad@gmail.com',
            password: 'midle'
        }
    ]

    if(search){
        data.map(value => {
            value.search = search

            return value
        })
    }

    console.log('keyword', keyword)
    console.log('search', search)

    res.json({
        message: 'Get list all data successfully by keyword',
        data: data
    })
})

app.use(LoggerMiddleware);

// endpoint get detail users by id
app.get('/users/:id', (req, res) => {
    const usersId = req.params.id;
    res.json({    
        message: `Get detail data users by id ${usersId} successfully`,
        data:
            {
                id: usersId,
                name: 'Ziad jhonson',
                email: 'ziad.jhonson@gmail.com',
                password: 'midlaner'
            }
    })
})

// endpoint post users by id
app.post('/users/:id', async (req, res) => {
    const { name, email, password } = req.body
    
    const result = await prisma.users.create({
    data:{
        user_id,
        username,
        email

    }   
    })

    res.json({
        message: 'Create data users is successfully',
        data: result 
    })
})

//endpoint update users by id
app.put('/users/:id', (req, res) => {
    const usersId = req.params.id;
    res.json({
        message: `update data users by id ${usersId} successfully`,
        data:
            {
                id:usersId,
                name: 'Ziad Cena',
                email: 'ziad.cena@gmail.com',
                password: 'midlaner',
                created_at: '2023/11/25 hh:mm:ss',
                updated_ad: '2023/11/25 20:31:00'
            }
    })
})

// endpoint delete users by id
app.delete('/users/:id', (req, res) => {
    const usersId = req.params.id;
    res.json({
        message: `delete data users by id ${usersId} successfully`,
        data: {}
    })
})

app.listen(port, () => {
    console.log(`contoh app belajar listing on port http://localhost:${port}`);
})