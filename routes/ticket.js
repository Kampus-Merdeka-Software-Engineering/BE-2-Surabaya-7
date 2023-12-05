const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(' hello gais');
})

// endpoint get all tickets
app.get('/tickets', (req, res) => {
    res.json({
        message: 'Get list all data tickets successfully',
        data: [
            {
                name: 'Ziad jhonson',
                email: 'ziad.jhonson@gmail.com',
                origin: 'jakarta',
                destination: 'surabaya',
                date_time: '2023/11/12',
                price: '200.000'
            },
            {
                name: 'Ziadiyah',
                email: 'ziadiyah@gmail.com',
                origin: 'jakarta',
                destination: 'surabaya',
                date_time: '2023/11/16',
                price: '250.000'
            },
            {
                name: 'Ziad',
                email: 'ziad@gmail.com',
                origin: 'jakarta',
                destination: 'surabaya',
                date_time: '2023/11/12',
                price: '250.000'
            }
        ]
    })
})

// endpoint get detail tickets by id
app.get('/tickets/:id', (req, res) => {
    const ticketId = req.params.id;
    res.json({    
        message: `Get detail data ticket by id ${ticketId} successfully`,
        data:
            {
                id: ticketId,
                name: 'Ziad jhonson',
                email: 'ziad.jhonson@gmail.com',
                origin: 'jakarta',
                destination: 'surabaya',
                date_time: '2023/11/22',
                price: '200.000'
            }
    })
})

// endpoint post users by id
app.post('/tickets/:id', (req, res) => {
    res.json({
        message: 'Create data tickets is successfully',
        data:
            {
                name: 'Ziad cihuy',
                email: 'ziad.cihuy@gmail.com',
                origin: 'jakarta',
                destination: 'surabaya',
                date_time: '2023/11/26',
                price: '200.000',
                created_at: '2023/11/25 20:31:00',
                updated_ad: '2023/11/25 hh:mm:ss'
            }
    })
})

//endpoint update tcikets by id
app.put('/tickets/:id', (req, res) => {
    const ticketId = req.params.id;
    res.json({
        message: `update data tickets by id ${ticketId} successfully`,
        data:
            {
                name: 'Ziad Cena',
                email: 'ziad.cena@gmail.com',
                origin: 'jakarta',
                destination: 'surabaya',
                date_time: '2023/11/28',
                price: '200.000',
                created_at: '2023/11/25 hh:mm:ss',
                updated_ad: '2023/11/25 20:31:00'
            }
    })
})

// endpoint delete tickets by id
app.delete('/tickets/:id', (req, res) => {
    const ticketId = req.params.id;
    res.json({
        message: `delete data tickets by id ${ticketId} successfully`,
        data: {}
    })
})

app.listen(port, () => {
    console.log(`contoh app belajar listing on port http://localhost:${port}`);
})