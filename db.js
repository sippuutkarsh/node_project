const mongoose=require("mongoose")

const connectDB=async ()=>{
  try{
     const connection=await mongoose.connect(
        "mongodb+srv://sippuutkarsh:sippuutkarsh@cluster0.cml5dxu.mongodb.net/posts_database?retryWrites=true&w=majority",
        {
           useNewUrlParser: true,
           useUnifiedTopology: true,
        }
     );
     console.log("mongoDB connected");
  }
  catch(error){
      console.log(error)
      process.exit(1)
  }
};
module.exports=connectDB;