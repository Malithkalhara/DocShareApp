var mongoose=require('mongoose');


var schema=mongoose.Schema;

let userSchema=new schema({
    name:{
        type:String
    },
    regno:{
        type:String,
        unique:true
    },
    mobile:{
        type:Number
    },
    email:{
        type:String
    },
    password:{type:String,required:true},
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    astatus:{
        type:String,
        enum:['active','pending'],
        default:'pending'
    }

});

var user=mongoose.model('user',userSchema);
module.exports=user;