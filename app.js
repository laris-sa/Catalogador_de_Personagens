var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index.js');
var personagemRouter = require('./routes/personagem.js');
var livrosRouter = require('./routes/livros.js');
var seriesRouter = require('./routes/series.js');
var filmesRouter = require('./routes/filmes.js');
var jogosRouter = require('./routes/jogos.js');

var loginRouter = require('./routes/login');
var esqueceuASenhaRouter = require('./routes/esqueceuASenha');
var criarContaRouter = require('./routes/criarConta');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/livros', livrosRouter);
app.use('/jogos', jogosRouter);
app.use('/series', seriesRouter);
app.use('/filmes', filmesRouter);

app.use('/personagem', personagemRouter);

app.use('/login', loginRouter);
app.use('/esqueceuASenha', esqueceuASenhaRouter);
app.use('/criarConta', criarContaRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.listen(8889, function() {
  console.log("Server is running on port 8889");
});

/*
router.get('/', function(req, res, next) {
  res.render('index', { results: false });
});

router.get('/search', function(req, res, next) {
  var searchParams = req.query.query.toUpperCase().split(' ');
  var db = require('../db');
  var Personagem = db.Mongoose.model('personagens', db.CustomerSchema, 'personagens');
  Personagem.find({ tags: { $all: searchParams } }, function(e, docs) {
    res.render('index', { results: true, search: req.query.query, list: docs });
  });
});*/