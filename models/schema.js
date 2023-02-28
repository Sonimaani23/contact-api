const mongoos=require('mongoose')

const uri = "mongodb+srv://sowmya:ZIT3zND48GEuUMzD@contact1.ltaif9o.mongodb.net/contactuser?retryWrites=true&w=majority";
mongoos.connect(uri
).then(
    ()=>{
        console.log("database is connected")
    }
)
.catch((err)=>{
    console.log(err)
})
//ZIT3zND48GEuUMzD