const express= require('express');

const mongoose= require('mongoose');

const bodyparser= require('body-parser');

const Registration= require('./Controller/regcon.js');

const port = process.env.PORT || 3000;

require('dotenv/config');

const app= express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended:true
}))

app.post('/Registration/newregistration',Registration.create);
app.get('/Registration/getallregistrationdetails',Registration.getdetails);

mongoose.connect('process.env.DB_CONNECTION',{
    useNewUrlParser: true,useUnifiedTopology: true

}, () => console.log('connected'));

app.listen(port,()=>{
    console.log('server listening on the port ')
})






