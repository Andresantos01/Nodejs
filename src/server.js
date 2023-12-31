const express = require('express');
const router = require('./routes/router');
require('dotenv/config')
const app = express();

/* -------------------------------------------------------------------------- */
/*                           CREATE SETUP SERVER JS                           */
/* -------------------------------------------------------------------------- */

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(process.env.PORT || 3000 ,()=>console.log('Server is running'))