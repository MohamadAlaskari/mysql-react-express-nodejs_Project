import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/books')
      .then(res => {
        console.log(books);
        setBooks(res.data);

      })

      
  }, []);

  return (
    <div>
      {books.map((book) => {
        console.log(book);
        return (
          <h1 key={book.id}>efefe {book.title} </h1>
        )
      })}
    </div>
  );
}

export default App;
