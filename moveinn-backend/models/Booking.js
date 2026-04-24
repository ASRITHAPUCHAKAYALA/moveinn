const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

city:{
type:String,
required:true
},

vehicle:{
type:String,
required:true
},

startDate:{
type:String,
required:true
},

endDate:{
type:String,
required:true
},

totalPrice:{
type:Number,
required:true
},

status:{
type:String,
enum:["Pending","Confirmed","Completed","Cancelled"],
default:"Pending"
}

},{timestamps:true})

module.exports = mongoose.model("Booking",bookingSchema)