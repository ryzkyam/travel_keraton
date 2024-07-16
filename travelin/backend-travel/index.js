const express = require('express')
const app = express()
const port = 8080;

app.get('/home', (req, res)=>{
     res.send(
          {name: "rezaxa"}
     );
});

app.get('/about/:judul', (req,res)=>{
     const {judul} = req.params
     res.send(`<h1>ini adalah response params:    ${judul}</h1>`);
     console.log(req.params);

});


app.get('/search', (req,res)=>{

     const {title,  } = req.query

     if(!title){
          res.send(`<h1>Data yang dicari tidak ada</h1>`)
     }
     res.send(`<h1>Search data:   ${title} </h1>` )
     console.log(req.query);
 
     
});


app.get("/login", (req, res) =>{
     console.log();
})



app.get("/data", (req, res) =>{
     const {nama, kelas} = req.query
     res.send(`data: ${nama}, ${kelas}`)
     console.log(req.query)
})



app.get('*', (req,res) =>{
     res.send(`<h1>Halaman tidak ditemukan</h1>`);
})

app.listen(port, () => {
     console.log("port runing in localhost:"+ port);
});