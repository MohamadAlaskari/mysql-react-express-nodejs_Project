const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql://u252525807_books:96MoAl96+@sql972.main-hosting.eu/u252525807_test');

class Book extends Model { }
Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    desc: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    cover: {
        type: DataTypes.STRING
    }, createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    }
}, {
    sequelize,
    modelName: 'Book',
    tableName: 'books'
});

module.exports = Book;
