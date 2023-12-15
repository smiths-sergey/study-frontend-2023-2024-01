import express from 'express';
import fs from 'fs/promises';
import Datastore from 'nedb';
import faker from 'faker';

const server = express();


const db = new Datastore({ filename: 'database.db', autoload: true });
//#region Первоначальная загрузка данных в БД
// db.remove({}, { multi: true }, function (err, numRemoved) { });
// for (let i = 0; i < 10; i++) {
//     const student = {
//         firstName: faker.name.firstName(),
//         lastName: faker.name.lastName(),
//         email: faker.internet.email(),
//         age: Math.floor(Math.random() * 10 + 18)
//     };
//     db.insert(student, (err, newDoc) => {

//     });
// };
//#endregion Первоначальная загрузка данных в БД
server.get('/', async (req, res) => {
    const indexPage = await fs.readFile('./index.html');
    res.send(indexPage.toString());
});

server.get('/students', async (req, res) => {
    db.find({}, ((err, records) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.send(records);
        }
    }));


});

server.listen(10000, () => {
    console.log('Server started');
});