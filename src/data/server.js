const express = require("express");
const cors = require('cors');
const app = express();
const sqlite3 = require('sqlite3')

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

const db = new sqlite3.Database('database.db')
let sql = 'CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, gender TEXT, password TEXT)'
db.run(sql)

app.post("/login", function (request, response) {
    let data = ""
    request.on("data", chunk => {
        data += chunk
    });
    request.on("end", () => {
        const user = JSON.parse(data)
        let sql = 'SELECT * FROM users WHERE name like lower(?) AND password = ?'
        db.all(sql, [user.name, user.password], (err, rows) => {
            if (err) console.log(err.message)
            else if (rows.length != 0) {
                console.log('Успешный вход')
                response.send(rows[0])
            }
            else {
                console.log(user)
                console.log('Ошибка при входе')
                response.send('Логин или пароль указан неверно')
            }
        })
    })
})

app.post("/register", function (request, response) {
    let data = ""
    request.on("data", chunk => {
        data += chunk
    });
    request.on("end", () => {
        const user = JSON.parse(data)
        let sql = 'SELECT * from users WHERE name like lower(?)'
        db.all(sql, [user.name], (err, rows) => {
            if (err) return err.message
            else if (rows.length == 0) {
                response.send('Аккаунт успешно создан')
                console.log(user)
                db.run(
                    'INSERT INTO users(name, password, gender) VALUES (?, ?, ?)', [user['name'], user['password'], user['gender']],
                    (err) =>{
                        if(err) return console.log(err.message)
                    }
                )
            }
            else {
                console.log('Аккаунт с текущим именем уже существует')
                response.send('Аккаунт с текущим именем уже существует')
            }
        })
    })
})

app.listen(3000, ()=>console.log("Сервер запущен"));