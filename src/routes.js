const {addBooksHandler, getAllBooksHandler, getBookByIdHandler, updateBookByHandler, deleteBooksByIdHandler} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler 
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookByHandler
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooksByIdHandler
    }
]