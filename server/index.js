const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const PORT = 4567;
const app = express();


const SELECT_ALL_FROM_BUILDINGS = 'SELECT * FROM buildings';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'building_ltd'
})
app.use(cors());

app.get('/tenant/search', (request,response) => {
    if (request.query.phone){
        connection.query('SELECT tenant_id FROM tenants WHERE tenant_mobile = ?',[request.query.phone],function (err,resp) {
            if (err) {return response.status(400).send()}
            if (resp.length == 0) return response.status(404).send();
            console.log(resp[0].tenant_id.toString());
            return response.send(resp[0].tenant_id.toString());
        })
    } else {
        return response.status(400).send();
     }
    
});





app.listen(PORT, ()=> console.log(`listening to server at port ${PORT}`));