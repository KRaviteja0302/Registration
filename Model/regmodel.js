const mongoose= require('mongoose'),schema= mongoose.Schema;

const Regischema= new schema({

    first_name: String,

    last_name: String,

    email:String,

    mobile:Number

})

module.exports=mongoose.model('Registration',Regischema);