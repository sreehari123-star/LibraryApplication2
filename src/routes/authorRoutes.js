const express = require('express');
const authorRouter = express.Router();
function router(nav){
    var authors = [
        {
            title:'Jonathan Swift',
            author:'He is the author of a Travelogue Fantasy Book - Gullivers Travels',
            genre:'Travelogue',
            img:'jonathan_swift.jpg'
        },
    
        {
            title:'J K Rowling',
            author:'She is the writer of a fantasy novel cum movie named HarryPotter',
            genre:'Fantasy',
            img:'rowling.jpg'
        },
    
        {
            title:'Vaikkom Muhammed Basheer',
            author:'He is the author of a wonderful drama named Paathummayude Aadu',
            genre:'Drama',
            img:'vaikkombasheer.jpg'
        },
        {
            title:'Sudha Murty',
            author:'She is famous for her story,How I Taught my Grandmother to Read',
            genre:'Story',
            img:'sudhamurty.jpg'
        },
        {
            title:'Robert Frost',
            author:'He is famous for his poem Road Not Taken',
            genre:'Poem',
            img:'robert.jpg'
        }
    ]
    
    
    authorRouter.get('/',function(req,res){
        res.render('authors',{
            nav,
            title:'Library',
            authors 
        });
    });
    
    // booksRouter.get('/single',function(req,res){
    //     res.send('Hey I am a Single Book');
    // });
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author:authors[id]
        });
    });

    return authorRouter;
}



module.exports = router;