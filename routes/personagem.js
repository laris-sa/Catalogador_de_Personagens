var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('personagem', { title: 'Express' });
});

router.get('/anarquia', function(req, res, next) {
  res.render('anarquia', { title: 'Express' });
});

router.get('/anyaForger', function(req, res, next) {
  res.render('anyaForger', { title: 'Express' });
});

router.get('/ash', function(req, res, next) {
  res.render('ash', { title: 'Express' });
});

router.get('/bartSimpson', function(req, res, next) {
  res.render('bartSimpson', { title: 'Express' });
});

router.get('/batman', function(req, res, next) {
  res.render('batman', { title: 'Express' });
});

router.get('/ben10', function(req, res, next) {
  res.render('ben10', { title: 'Express' });
});

router.get('/bobEsponja', function(req, res, next) {
  res.render('bobEsponja', { title: 'Express' });
});

router.get('/calice', function(req, res, next) {
  res.render('calice', { title: 'Express' });
});

router.get('/carlJohnson', function(req, res, next) {
  res.render('carlJohnson', { title: 'Express' });
});

router.get('/chapeleiroMaluco', function(req, res, next) {
  res.render('chapeleiroMaluco', { title: 'Express' });
});

router.get('/chaves', function(req, res, next) {
  res.render('chaves', { title: 'Express' });
});

router.get('/coringa', function(req, res, next) {
  res.render('coringa', { title: 'Express' });
});

router.get('/damianDesmond', function(req, res, next) {
  res.render('damianDesmond', { title: 'Express' });
});

router.get('/darthVader', function(req, res, next) {
  res.render('darthVader', { title: 'Express' });
});

router.get('/dobby', function(req, res, next) {
  res.render('dobby', { title: 'Express' });
});

router.get('/dory', function(req, res, next) {
  res.render('dory', { title: 'Express' });
});

router.get('/dougFunnie', function(req, res, next) {
  res.render('dougFunnie', { title: 'Express' });
});

router.get('/duasCaras', function(req, res, next) {
  res.render('duasCaras', { title: 'Express' });
});

router.get('/elizabeth', function(req, res, next) {
  res.render('elizabeth', { title: 'Express' });
});

router.get('/ellenRipley', function(req, res, next) {
  res.render('ellenRipley', { title: 'Express' });
});

router.get('/finn', function(req, res, next) {
  res.render('finn', { title: 'Express' });
});

router.get('/frankenstein', function(req, res, next) {
  res.render('frankenstein', { title: 'Express' });
});

router.get('/frodo', function(req, res, next) {
  res.render('frodo', { title: 'Express' });
});

router.get('/hamlet', function(req, res, next) {
  res.render('hamlet', { title: 'Express' });
});

router.get('/harryPotter', function(req, res, next) {
  res.render('harryPotter', { title: 'Express' });
});

router.get('/ichigoKurosaki', function(req, res, next) {
  res.render('ichigoKurosaki', { title: 'Express' });
});

router.get('/jackSparrow', function(req, res, next) {
  res.render('jackSparrow', { title: 'Express' });
});

router.get('/jayGatsby', function(req, res, next) {
  res.render('jayGatsby', { title: 'Express' });
});

router.get('/jinx', function(req, res, next) {
  res.render('jinx', { title: 'Express' });
});

router.get('/kratos', function(req, res, next) {
  res.render('kratos', { title: 'Express' });
});

router.get('/lala', function(req, res, next) {
  res.render('lala', { title: 'Express' });
});

router.get('/lali', function(req, res, next) {
  res.render('lali', { title: 'Express' });
});

router.get('/leonKennedy', function(req, res, next) {
  res.render('leonKennedy', { title: 'Express' });
});

router.get('/lightYagami', function(req, res, next) {
  res.render('lightYagami', { title: 'Express' });
});

router.get('/link', function(req, res, next) {
  res.render('link', { title: 'Express' });
});

router.get('/lisbethSalander', function(req, res, next) {
  res.render('lisbethSalander', { title: 'Express' });
});

router.get('/loidForger', function(req, res, next) {
  res.render('loidForger', { title: 'Express' });
});

router.get('/mario', function(req, res, next) {
  res.render('mario', { title: 'Express' });
});

router.get('/neo', function(req, res, next) {
  res.render('neo', { title: 'Express' });
});

router.get('/nigel', function(req, res, next) {
  res.render('nigel', { title: 'Express' });
});

router.get('/oPequenoPrincipe', function(req, res, next) {
  res.render('oPequenoPrincipe', { title: 'Express' });
});

router.get('/perry', function(req, res, next) {
  res.render('perry', { title: 'Express' });
});

router.get('/raskolnikov', function(req, res, next) {
  res.render('raskolnikov', { title: 'Express' });
});

router.get('/saulGoodman', function(req, res, next) {
  res.render('saulGoodman', { title: 'Express' });
});

router.get('/scorpion', function(req, res, next) {
  res.render('scorpion', { title: 'Express' });
});

router.get('/sherlock', function(req, res, next) {
  res.render('sherlock', { title: 'Express' });
});

router.get('/sullivan', function(req, res, next) {
  res.render('sullivan', { title: 'Express' });
});

router.get('/tyrone', function(req, res, next) {
  res.render('tyrone', { title: 'Express' });
});

router.get('/yorForger', function(req, res, next) {
  res.render('yorForger', { title: 'Express' });
});
module.exports = router;