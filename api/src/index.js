const express  = require('express');
const mysql =  require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: '172.18.0.2',
    user: 'root',
    password: 'Master99',
    database: 'trialdatabase'
});

connection.connect();
app.use(express.urlencoded({ extended: true }));

app.get('/getclient/:id?', (req, res) => {

    connection.query('SELECT * FROM cliente where id = ' + req.params.id, function (error, results){
        if(error){
            throw 'teste' + error
        }
        res.send(
            results.map(
                item => ({
                    id: item.id,
                    nome: item.nome,
                    rua: item.rua,
                    cidade: item.cidade,
                    pais: item.pais
                })
            )
        );
    })
})
app.get('/getclients', function (req, res){
   connection.query('SELECT * FROM cliente', function (error, results){
       if(error){
           throw error
       }
       res.send(
           results.map(
               item => ({
                   id: item.id,
                   nome: item.nome,
                   rua: item.rua,
                   cidade: item.cidade,
                   pais: item.pais
               })
           )
       );
   })
});
app.post('/setclient', (req, res) => {

    const nome = req.body.nome;
    const rua = req.body.rua;
    const cidade = req.body.cidade;
    const pais = req.body.pais;
    connection.query(`INSERT INTO cliente(nome, rua, cidade, pais) VALUES('${nome}','${rua}','${cidade}','${pais}')`, function (error, results){
        if(error){
            throw 'teste' + error
        }
        res.send(
            `{ message: 'Inserido com sucesso!' }`
        );
    });
});
app.put('/setclient/:id?', (req, res) => {

    const nome = req.body.nome;
    const rua = req.body.rua;
    const cidade = req.body.cidade;
    const pais = req.body.pais;

    connection.query(`UPDATE cliente set nome = '${nome}',  rua = '${rua}', cidade = '${cidade}', pais = '${pais}' where id = ` + req.params.id, function (error, results){
        if(error){
            throw error
        }
        res.send(
            'atualizado!'
        );
    })
})

app.post('/setdelivery', (req, res) => {

    const peso = req.body.peso;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const cliente_id = req.body.cliente_id;
    connection.query(`INSERT INTO entrega (peso, lat, lng, cliente_id) VALUES('${peso}','${lat}','${lng}','${cliente_id}')`, function (error, results){
        if(error){
            throw error
        }
        res.send(
            `{ message: 'Inserido com sucesso!' }`
        );
    });
});
app.get('/getdeliveries', function (req, res){
    connection.query('SELECT * FROM entrega', function (error, results){
        if(error){
            throw 'teste' + error
        }
        res.send(
            results.map(
                item => ({
                    id: item.id,
                    peso: item.peso,
                    lat: item.lat,
                    lng: item.lng,
                    cliente_id: item.cliente_id
                })
            )
        );
    })
});
app.get('/getdelivery/:id?', (req, res) => {
    connection.query('SELECT * FROM entrega where id = ' + req.params.id, function (error, results){
        if(error){
            throw error
        }
        res.send(
            results.map(
                item => ({
                    id: item.id,
                    peso: item.peso,
                    lat: item.lat,
                    lng: item.lng,
                    cliente_id: item.cliente_id
                })
            )
        );
    })
})

app.listen(9001, '0.0.0.0', function (){
    console.log('Up And Running on 9001');
})