const {nanoid} = require('nanoid');
const books = require('./books');
const routes = require('./routes');

const addBooksHandler = (request,h) =>{
    const { name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;

    id = nanoid(16);
    finished = Boolean;
    if(pageCount === readPage){
        finished == true;
    }
    insertedAt = new Date().toString();
    updatedAt = insertedAt;

    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt
    };

    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess){
        const response = h.response({
            error: false,
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data:{
                bookId : id,
            }
        });
        response.code(201);
        return response;
    }
    else if(readPage > pageCount){
        const response = h.response({
            error: true,
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        });
        response.code(400)
    }
    else if(name === ''){
        const response = h.response({
            error: true,
            status: 'fail',
            message: 'Gagal menambahkan buku. mohon mengisi nama buku'
        });
        response.code(400)
    }
}

const getAllBooksHandler = (h) => {
    if (true){
        response.code(200)
        const response = h.response({
            status: 'success',
            data:{
                books,
            } 
        })
    }
}

const getBookByIdHandler = () => {
    const { id } = request.params;

    const book = books.filter ((n) => n.id === id)[0];

    if (book !== undefined){
        response.code(200)
        return {
            status:'success',
            data:{
                note,
            },
        };
    }
    const response = h.response({
        status:'fail',
        message: 'buku tidak ditemukan',
    })
    response.code(404)
}

const updateBookByHandler = (request,h) => {
    const { id } = request.params;

    const { name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;
    const updatedAt = new Date().toISOString();

    const index = books.findIndex((book) => note.id === id);

    if (index !== -1){
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading
        };

        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui'
        })
        response.code(200);
        return response;
    }
    else if(name === ''){
        response.code(400)
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. mohon isi nama buku'
        })
    }
    else if(readPage > pageCount){
        response.code(400)
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
        })
    }
    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku, Id tidak ditemukan'
    });
    response.code(404)
}

const deleteBooksByIdHandler = (request,h) => {
    const { id } = request.params;

    const index = notes.findIndex((note) => note.id === id);

    if (index !== 1){
        books.splice(index,1);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus'
        });
        reponse.code(200);
        return response;
    }
    const response = h.reponse({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
    })
    reponse.code(404);
    return response;
}



module.exports = {addBooksHandler,getAllBooksHandler,getBookByIdHandler,updateBookByHandler,deleteBooksByIdHandler};