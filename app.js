const express = require('express');
const app = express();

app.use('/',(req,res,next)=>{
    console.log('Hello from node');
    console.log('Hello from react');
});
app.listen(3000);