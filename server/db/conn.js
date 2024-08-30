const mongoose=require('mongoose');
// connect data base

mongoose.connect("mongodb+srv://admin7888:admin7888@cluster0.on4o1li.mongodb.net/student?retryWrites=true&w=majority",{
    useNewUrlParser:true,
}).then(()=>{
    console.log("connenction succesfully");
}).catch((e)=>{
    console.log(e);
})