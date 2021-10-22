const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { Router } = require('express');
require('dotenv').config();
const errorHandler = require('./middleware/error')

const PORT = process.env.PORT || 5000;

//intiaize app
const app =  express();


//rate Limiter
const limiter = rateLimit({
    windowMS:  10*60*1000,
    max: 10
})
//middleware
app.use(limiter);
app.set('trust proxy', 1);

//app use for taking "input packages"
app.use(cors());

// Set static folder
app.use(express.static('public'))

// routes
app.use('/api', require('./routes'))

// Error handler middleware
app.use(errorHandler)

//app runnning port
app.listen(PORT, () =>  console.log(`server is running at ${PORT}`));

