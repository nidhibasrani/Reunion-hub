const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;



app.get('/test', (req, res)=>{
    res.send('Hello from the server')
})


app.listen(port, () => {
    console.log('Server is running on port:', port);
})



