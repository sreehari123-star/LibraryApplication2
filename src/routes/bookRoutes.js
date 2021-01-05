const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title:'Gullivers Travels',
            author:'Jonathan Swift',
            genre:'Travelogue',
            img:'gulliver.jpg'
        },
        
        {
            title:'Harry Potter',
            author:'J K Rowling',
            genre:'Fantasy',
            img:'harry.jpg'
        },
    
        {
            title:'Paathummayude Aadu',
            author:'Basheer',
            genre:'Drama',
            img:'basheer.jpg'
        },
        {
            title:'How I Taught my Grandmother to read',
            author:'Sudha Murty',
            genre:'Story',
            img:'grandmother.jpg'
        },
        {
            title:'Road Not Taken',
            author:'Robert Frost',
            genre:'Poem',
            img:'roadnottaken.jpg'
        }
    ]
    
    
    booksRouter.get('/',function(req,res){
        res.render('books',{
            nav,
            title:'Library',
            books 
        });
    });
    
    // booksRouter.get('/single',function(req,res){
    //     res.send('Hey I am a Single Book');
    // });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book:books[id]
        });
    });

    return booksRouter;
}



module.exports = router;