const express = require('express');

const { getConnection } = require('./db/db-connect-mongo');
require('dotenv').config();
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());



const port = 4004;

getConnection();
app.use('/proyecto', require('./router/proyecto'));



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })