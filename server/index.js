require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(cors());app.use(bodyParser.json());
app.post('/api/contact', async (req,res)=>{const {name,email,message}=req.body;if(!name||!email||!message) return res.status(400).json({ok:false});try{const transporter=nodemailer.createTransport({host:process.env.SMTP_HOST,port:parseInt(process.env.SMTP_PORT||'587'),secure:process.env.SMTP_SECURE==='true',auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});await transporter.sendMail({from:process.env.SMTP_FROM||process.env.SMTP_USER,to:process.env.TO_EMAIL||process.env.SMTP_USER,subject:`Website contact from ${name}`,text:`Name: ${name}\nEmail: ${email}\nMessage:\n${message}`});return res.json({ok:true});}catch(err){console.error(err);return res.status(500).json({ok:false});}});const port=process.env.PORT||4000;app.listen(port,()=>console.log('Server running on',port));