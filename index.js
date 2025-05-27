const express = require('express')
const mysql = require('mysql2')

const app = express()

app.use(express.json())

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja'
})

app.post('/produtos', (req, res) => {
    const produto = {nome, preco, quantidade} = req.body

    conexao.query(
        'INSERT INTO produtos (nome, preco, quantidade) VALUES (?,?,?)',
        [
            nome,
            preco, 
            quantidade, 
        ],
        () => {
            res.status(201).send('Consulta cadastrada com sucesso!')
    })
})

app.get('/produtos', (req, res) => {
    conexao.query('SELECT * FROM  produtos', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscas produtos')
        }

        res.status(200).send(results)
    })
})


app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})

app.delete("/produtos/:id", (req, res) => {
    const {id} = req.params;

    conexao.query("DELETE from produtos WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao deletar");
    
        }

        res.status(200).send("Produto deletado com sucesso")
    });
});

app.put("/produtos/:id", (req, res) => {
    const {id} = req.params;
    const {nome, preco, quantidade} = req.body

    const query = "UPDATE produtos SET nome = ?, preco = ?, quantidade = ? WHERE id = ?"
    conexao.query(query, [nome, preco, quantidade, id], (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao atualizar")
        }

        if (results.affectedRows === 0) {
            return res.status(404).send("Produto não encontrado")
        }

        res.send("Produto atualizado com sucesso")
    })
})

app.post('/funcionarios', (req, res) => {
    const produto = {nome, idade, cargo} = req.body

    conexao.query(
        'INSERT INTO funcionarios (nome, idade, cargo) VALUES (?,?,?)',
        [
            nome,
            idade, 
            cargo, 
        ],
        () => {
            res.status(201).send('Funcionário cadastrado com sucesso!')
    })
})

app.get('/funcionarios', (req, res) => {
    conexao.query('SELECT * FROM  funcionarios', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar o registro do funcionário!')
        }

        res.status(200).send(results)
    })
})

app.delete("/funcionarios/:id", (req, res) => {
    const {id} = req.params;

    conexao.query("DELETE from funcionarios WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao deletar");
    
        }

        res.status(200).send("Registro deletado com sucesso")
    });
});

app.put("/funcionarios/:id", (req, res) => {
    const {id} = req.params;
    const {nome, idade, cargo} = req.body

    const query = "UPDATE funcionarios SET nome = ?, idade = ?, cargo = ? WHERE id = ?"
    conexao.query(query, [nome, idade, cargo, id], (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao atualizar")
        }

        if (results.affectedRows === 0) {
            return res.status(404).send("Registro não encontrado")
        }

        res.send("Registro atualizado com sucesso")
    })
})