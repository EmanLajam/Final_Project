const express = require('express')
const routes = require('./routes/UserRoutes')
const AdminRoutes = require('./routes/AdminRoutes')
const mysql = require('mysql');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
/*
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'final_project'
  });
  
  con.connect(function(err) {
    if (err){

     throw err;
    }
    console.log("Connected!");
  });

*/
app.get('/', (req, res) => {
    res.send("Hello")
})
app.use('/', routes )
app.use('/admin', AdminRoutes )



app.listen(5000, () => {
    console.log('Server Running !');
})