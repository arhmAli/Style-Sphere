const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
const {Person,schema,Contact,schemaContact} = require('./model');
const port = 3000;

// const corsOptions = {
//   origin: 'https://style-sphere-omega.vercel.app/', // Allow your frontend domain
//   optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// //app.use(cors());
// const corsOptions = {
//   origin: 'https://style-sphere-omega.vercel.app', // Allow your frontend domain
//   optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors(corsOptions));
app.use(bodyParser.json());
require('dotenv').config();
// Connect to the default MongoDB URI
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Default database connected"))
.catch((e) => console.log(e));

const connections = {
    fsd: mongoose.createConnection(process.env.MONGO_FSD_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    lhr: mongoose.createConnection(process.env.MONGO_LHR_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    isb: mongoose.createConnection(process.env.MONGO_ISB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  };  
// Route to handle person data
app.post('/persondata', async (req, res) => {
  const { city, name, height, chestsize, shoesize, waistsize } = req.body;

  if(!connections[city]) {
    return res.status(400).json({ message: "Invalid city" });
  }
  // Connect to the specified database URI
  try {
    // Create a new person record
   
    const personModel=connections[city].model('persondata',schema)
    const persondata = await personModel.create({ name, height, chestsize, shoesize, waistsize });
    res.status(201).json(persondata);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error" });
  }
});
app.post('/userdata',async(req,res)=>{
   const {city,name,height,chestsize,shoesize,waistsize}=req.body
   try{
      const citySelect=connections[city].model('persondata',schema)
      //find the person with the exact data of heigh,chestsize,shoesize,waistsize
      const person=await citySelect.find({height,chestsize,shoesize,waistsize})
      res.status(200).json(person)
   }
   catch(e){
       console.log(e)
       res.status(500).json({message:"Error"})
   }
})
app.get('/persondata/:city',async(req,res)=>{
  const {city}=req.params
  if(!connections[city]){
      return res.status(400).json({message:"Invalid city"})
  }
  try{
    const persondata=connections[city].model('persondata',schema)
    const result=await persondata.find()
    res.status(200).json(result)
  }
  catch(e){
    console.log(e)
    res.status(500).json({message:"Error"})
  }
})

app.post("/contactdata",async(req,res)=>{
    const {city,email,phonenumber}=req.body
    try{
        const contactModel=connections[city].model('contactdata',schemaContact)
        const contactdata=await contactModel.create({email,phonenumber})
        res.status(201).json(contactdata)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Error"})
    }
    

})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
