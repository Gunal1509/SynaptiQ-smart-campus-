const express=require('express');
const mysql=require('mysql2');
const cors=require('cors');
const bcrypt=require('bcrypt');

const app=express();

app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Gunal@15',
    database:'campus'
});
db.connect((err) => {
    if(err){
        console.error('Error connecting to database:', err);
    }else{
        console.log('Connected to database');
    }
});
app.post('/signup',async(req,res)=>{
    const {name,email,password}=req.body;
    const securepass=await bcrypt.hash(password,10);
    const query='INSERT INTO users (name,email,password) VALUES (?,?,?)';
    db.query(query,[name,email,securepass],(er,result)=>{
        if(er){
            return res.status(500).send({message:'Error registering user'});
        }
        else{
            return res.status(200).send({message:'User registered successfully'});
        } 
    });
});
app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const query='SELECT * FROM users WHERE email=?';
    db.query(query,[email],async(er,result)=>{
        if(er){
            return res.status(500).send({message:'Error logging in'});
        }
        if(result.length===0){
            return res.status(400).send({message:'User not found'});
        }
        const user=result[0];
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).send({message:'Invalid password'});
        }
        return res.status(200).send({message:'Login successful'});
    });
});
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
