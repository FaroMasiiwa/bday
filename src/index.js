const express           = require('express');
const app               = express();
require('dotenv').config();


const PORT = '3000'

app.get('/', (req,res) => {
    res.send('Live and working')
})

app.listen(PORT, ()=>{
    console.log(`Listening to requests on ${PORT}`)
});