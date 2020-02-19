const mysql = require('mysql');

let conexao = mysql.createConnection(
    {
        host: 'localhost',
        database: 'digidex',
        user: 'root',
        password: '',
        charset: 'utf8'
    });

// eslint-disable-next-line eqeqeq
if (conexao.state != 'authenticated')
    conexao.connect();

module.exports = {
    conexao: conexao
}
