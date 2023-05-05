const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxLength : 50,
    },
    emial : {
        type : String,
        maxLength : 50,
        trim : true, // space 제거
        unique : 1, // 값의 중복 방지
    },
    role : {
        type : Number,
        default : 0, // 값이 없으면 0
    },
    token : {
        type : String,
    },
    tokenExp : {
        type: String,
    },    
}); 

const User = mongoose.model('User', userSchema); // userSchema를 model로 감싸준다

module.exports = {User};