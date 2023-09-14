const app=require('../index')

app.post('/api/users',(req,res)=>{
    const {name,email,phone,jobTitle}=req.body;

    if(name!==""&&email!==""&&phone!==""&&jobTitle!==""){
        res.status(200).json({message:"data looks good"})
    }else{
        console.log("fill all")
        res.status(500).json({message:"fill it all"})
        
    }
})