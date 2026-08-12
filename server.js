const express=require('express'); const path=require('path'); const app=express(); const PORT=process.env.PORT||10000;
app.use(express.json()); app.use(express.urlencoded({extended:false})); app.use(express.static(path.join(__dirname,'public')));
app.get('/api/health',(req,res)=>res.json({service:'ARAYA',status:'ok'}));
app.post('/api/auth/login',(req,res)=>{const {identifier,password}=req.body||{}; if(!identifier||!password)return res.status(400).json({success:false,message:'User ID/mobile and password are required.'}); res.json({success:false,otpRequired:false,message:'ARAYA authentication backend is ready. Connect your database and authorized OTP provider before enabling real authentication.'});});
app.post('/api/auth/forgot-password',(req,res)=>{if(!req.body?.identifier)return res.status(400).json({success:false,message:'Identifier is required.'});res.json({success:true,message:'If the account exists, a verification OTP will be sent by the configured provider.'});});
app.post('/api/auth/logout',(req,res)=>res.json({success:true}));
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','login.html')));
app.listen(PORT,'0.0.0.0',()=>console.log(`ARAYA running on port ${PORT}`));
