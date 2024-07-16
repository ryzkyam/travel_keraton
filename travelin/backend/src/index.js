const express = require('express') 
const dotenv = require('dotenv')
const app = express()
// const mysql = require('mysql')

dotenv.config();

const PORT = process.env.PORT
const DATABASE_URL = print.env.database;

// const db  = mysql.createConnection({    
//      host: 'localhost',
//      user: 'root',  
//      password: '',
//      database: 'Travel_Keraton'
// })

getComputedStyle.apply()

// const datamahsasiswa =  async (req, res) =>{
//      const daya = await DataTransfer.datamahsasiswa

//      if(daya){
//           console.log('success');
//      }else{
//           console.log('data requeired');
//      }

//      try {
          
//      } catch (error) {
//           console.log("filed");
//      }
// }

//middleware





app.get("/api", (req, res) =>{
     res.send("server running");
})

app.listen(PORT, ()=>{   
     console.log("express runnning in port: " + PORT);
})



