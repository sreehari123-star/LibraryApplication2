const express = require('express');
const app = express();
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/add',name:'Add Book'
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/login',name:'Log In'
    }
];


const booksRouter = require('./src/routes/bookRoutes')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        nav,
        title:'Library'
    });
});


const authorRouter = require('./src/routes/authorRoutes')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/authors',authorRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        nav,
        title:'Library'
    });
});


const addRouter = require('./src/routes/addRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/add',addRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        nav,
        title:'Library'
    });
});

const signupRouter = require('./src/routes/signupRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/signup',signupRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        nav,
        title:'Library'
    });
});

const loginRouter = require('./src/routes/loginRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/login',loginRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        nav,
        title:'Library'
    });
});


app.listen(11000);