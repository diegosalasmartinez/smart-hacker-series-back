require('dotenv').config()
require('express-async-errors')

const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')

const specialtyRoutes = require('./src/routes/SpecialtyRoutes')

const errorHandlerMiddleware = require('./src/middleware/errorHandlerMiddleware')
const notFoundMiddleware = require('./src/middleware/notFoundMiddleware')

const app = express();
app.set('trust proxy', 1);
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));
app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(cors());
app.use(xss());

app.get('/', (req, res) => { res.send("<h1>Welcome to Smart Hacker Series</h1><p>Developed by Diego Salas and Jeferson Miranda</p>") })

const baseUrl = "/api/v1"
app.use(baseUrl + '/specialties', specialtyRoutes);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})