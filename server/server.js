const express = require('express');
const bodyParser = require('body-parser');
const Book = require('./models/Books');

const app = express();
const cors = require("cors")
app.use(cors());
app.use(express.json());

app.get('/books', async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
});

app.get('/books/:id', async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    res.send(book);

});

app.post('/books', async (req, res) => {
    const { title, desc, price, cover } = req.body;
    const book = await Book.create({ title, desc, price, cover });
    res.send(book);
});

app.put('/books/:id', async (req, res) => {
    const { title, desc, price, cover } = req.body;
    const book = await Book.findByPk(req.params.id);
    book.title = title;
    book.desc = desc;
    book.price = price;
    book.cover = cover;
    await book.save();
    res.send(book);
});

app.delete('/books/:id', async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    await book.destroy();
    res.send('Book deleted successfully');
});

app.listen(3003, () => {
    console.log('Server listening on port 3003')
});
