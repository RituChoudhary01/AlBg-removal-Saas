import mongoose from 'mongoose';
const connectDB = async()=>{
mongoose.connection.on('connected',()=>{
  console.log("DB Conneted");
})
await mongoose.connect(`${process.env.MONGODB_URL}/bg-removal`)
}
export default connectDB;