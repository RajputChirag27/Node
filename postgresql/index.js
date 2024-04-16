const express = require('express')
const app = express();
const { text } = require('express');
const client = require('./config')


client.connect()

app.use(express.json())

app.get('/', async (req, res) => {

    client.query(`select * from users`, (err, result) => {
        if (err) {
            res.send(err)
            client.end()
        } else {
            res.send(result.rows)
        }
    })
})


app.post('/', async (req, res) => {
    const query = {
        text: `Insert into users(name) values($1)`,
        values: [req.body.name]
    };
    try {
        const result = await client.query(query);
        res.send(result);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error executing query');
    }
});

app.put('/:id', async (req, res) => {
    const query = {
        text: `UPDATE users
                SET name = $1
                WHERE id = $2`,
        values: [req.body.name, req.params.id]
    };
    try {
        const result = await client.query(query);
        res.send(result);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error executing query');
    }
});

app.delete('/:id', async (req, res) => {
    const query = {
        text: `DELETE FROM users
               WHERE id = $1`,
        values: [req.params.id]
    };
    try {
        const result = await client.query(query);
        res.status(200).send(`User with ID ${req.params.id} has been deleted`);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error executing query');
    }
});




app.listen(4040)