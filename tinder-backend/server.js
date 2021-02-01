import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'

//pt0Hbfx41mfPCjAC

// App Config
const app = express();
const Port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:pt0Hbfx41mfPCjAC@cluster0.iijte.mongodb.net/<dbname>?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo');
})


//API endpoints 
app.get('/', (req, res) => {
    res.status(200).send('hello Vijay')
})

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/card', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});

// Listerners
app.listen(Port, () => console.log(`listerning on localhost:${Port}`))
