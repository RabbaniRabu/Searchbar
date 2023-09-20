const express=require("express");
const cors=require("cors");
const mongodb=require("mongodb");
const {MongoClient}=require("mongodb");

let app=express();

app.use(cors());
app.use(express.json());

let client=new MongoClient(`mongodb+srv://admin:admin@rbatch.fsy5hok.mongodb.net/?retryWrites=true&w=majority`);

app.get("/allProducts",async(req,res)=>{
    await client.connect();
    let records=await client.db("products").collection("lists").find().toArray();
    res.json(records);
});
app.listen(8765,()=>{
    console.log("server listening port no.8765");
})
