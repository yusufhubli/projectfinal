
import mongoose from 'mongoose';


    // track the connection
    
    export const connectToDB = async () => {
      'use server'
      mongoose.set('strictQuery', true);
    
    
      try {
        await mongoose.connect("mongodb://localhost:27017", {
          dbName:"freelance",
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
    
        console.log('MongoDB connected')
      } catch (error) {
        console.log(error);
      }
}
export default connectToDB
  