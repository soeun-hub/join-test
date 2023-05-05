const express = require('express');
const app = express();
const port = 8080;

const User = require('./models/User');

app.use(express.urlencoded({extended : true }));
app.use(express.json());

app.get('/',function(req, res){
    res.send('Hello World! This is Join-test page.');
});

app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) return res.json({ success : failse, err });
        return res.status(200).json({
            success : true,
            userInfo,
        });
    });
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