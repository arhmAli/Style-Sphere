const mongoose = require ('mongoose')

const Schema=mongoose.Schema

const PersonSchema=new Schema({
    city:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    chestsize:{
        type:Number,
        required:true
    },
    shoesize:{
        type:Number,
        required:true
    },
    waistsize:{
        type:Number,
        required:true
    }
})

const ContactSchema=new Schema({
    email:String,
    phonenumber:Number,
})
const schemaContact=Schema({
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    }
})
const schema=Schema({
    city:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    chestsize:{
        type:Number,
        required:true
    },
    shoesize:{
        type:Number,
        required:true
    },
    waistsize:{
        type:Number,
        required:true
    }
})
module.exports={
    Person:mongoose.model('persondata',PersonSchema),
    Contact:mongoose.model('contactdata',ContactSchema),
    schema:schema,
    schemaContact:schemaContact
}