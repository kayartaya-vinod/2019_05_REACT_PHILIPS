const bodyParser = require('body-parser');
const express = require('express');
var app = express();
app.use(bodyParser.text())
app.use(express.static('public'));

app.post('/test', (req, resp)=>{

    const start = Date.now();
    while((Date.now() - start) <= 5000);
    
    console.log('Ending the response. name =', req.body);
    resp.send();

});



app.listen(8080, ()=>console.log('Server started'));