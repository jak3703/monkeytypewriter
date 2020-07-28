const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.sendFile('./views/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on port: "+PORT));
