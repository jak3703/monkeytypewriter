const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'index.html'), function(err){
        if(err){
            console.log(err);
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on port: "+PORT));
