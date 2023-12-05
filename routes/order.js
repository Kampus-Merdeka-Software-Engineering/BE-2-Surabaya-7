const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(' hello gais');
})

// endpoint get all orders
app.get('/orders', (req, res) => {
    res.json({
        message: 'Get list all data orders successfully',
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
                orderId: 2,
                name: 'Ziadiyah',
                email: 'ziadiyah@gmail.com',
                origin: 'jakarta',
                destination: 'surabaya',
                date_time: '2023/11/16',
                price: '250.000'
            },
            {
                orderId: 3,
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

// endpoint get detail orders by id
app.get('/orders/:id', (req, res) => {
    const ordersId = req.params.id;
    res.json({    
        message: `Get detail data order by id ${ordersId} successfully`,
        data:
            {
                id: ordersId,
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
app.post('/orders/:id', (req, res) => {
    res.json({
        message: 'Create data orders is successfully',
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

//update orders data by id
app.put('/orders/:id', (req, res) => {
    const ordersId = req.params.id;
    res.json({
        message: `upgrade data orders by id ${ordersId} successfully`,
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

// endpoint delete users by id
app.delete('/orders/:id', (req, res) => {
    const ordersId = req.params.id;
    res.json({
        message: `delete data orders by id ${ordersId} successfully`,
        data: {}
    })
})

app.listen(port, () => {
    console.log(`contoh app belajar listing on port http://localhost:${port}`);
})