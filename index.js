const express = require('express');
const app = express();
const port = 8080;

app.get('.',function(req, res){
    res.send('Hello World');
});

app.listen(port, () => console.log(`${port} 포트입니다.`));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://soeun:Aa3NBbiuXyzj0MCg@join-test.obuuqua.mongodb.net/?retryWrites=true&w=majoritydf',{
    // useNewUrlPaser : true,
    // useUnitfiedTofology : true,
    // useCreateIndex : true,
    // useFindAndModify : false,
}).then(() => console.log('mongoDB connected!')).catch((err) => {
    console.log(err);
});

// git Hub! 22222222222222222 