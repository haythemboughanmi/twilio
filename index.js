const express = require("express")
const cors =require("cors")
const { MessagingResponse } = require('twilio').twiml;
const port = 4555
const app =express()
const {postrouter}=require("./seveur/router/postRouter")
const {routermail}=require("./seveur/router/routermail")

app.use(express.json())
app.use(cors())

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
  
    twiml.message('The Robots are coming! Head for the hills!');
  
    res.type('text/xml').send(twiml.toString());
  });


app.use("/",postrouter)
app.use("/",routermail)
app.listen(port,(error)=>{
    error?console.log(error) : console.log(`serveur is runing http://localhost:${port}`)
})

